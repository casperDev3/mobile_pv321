import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';

import Pacman from '../components/Pacman';
import Wall from '../components/Wall';
import Ghost from '../components/Ghost';
import Dot from '../components/Dot';
import Physics from '../utils/Physics';

export default function PacmanGame() {
    const [score, setScore] = useState(0);
    const [running, setRunning] = useState(false);
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;

    const pacman = Matter.Bodies.circle(50, 50, 15, { label: 'Pacman' });
    const walls = [
        Matter.Bodies.rectangle(200, 10, 400, 20, { isStatic: true }),
        Matter.Bodies.rectangle(200, 390, 400, 20, { isStatic: true }),
        Matter.Bodies.rectangle(10, 200, 20, 400, { isStatic: true }),
        Matter.Bodies.rectangle(390, 200, 20, 400, { isStatic: true }),
    ];

    const ghost = Matter.Bodies.rectangle(300, 200, 30, 30, { label: 'Ghost' });

    const dots = [
        Matter.Bodies.circle(100, 100, 5, { isSensor: true }),
        Matter.Bodies.circle(150, 200, 5, { isSensor: true }),
        Matter.Bodies.circle(200, 300, 5, { isSensor: true }),
    ];

    Matter.World.add(world, [pacman, ghost, ...walls, ...dots]);

    return (
        <View style={styles.container}>
            {running ? (
                <>
                    <GameEngine
                        style={styles.engine}
                        systems={[Physics]}
                        onEvent={(e: any) => {
                            if (e.type === 'collected-dot') {
                                setScore(score + 10);
                                delete entities[e.dotId];
                                if (score + 10 >= dots.length * 10) {
                                    setRunning(false);
                                    alert('You Win!');
                                }
                            }
                            if (e.type === 'game-over') {
                                setRunning(false);
                                alert('Game Over!');
                            }
                        }}
                        entities={{
                            physics: { engine, world },
                            pacman: { body: pacman, color: 'yellow', renderer: Pacman },
                            ghost: { body: ghost, color: 'red', renderer: Ghost, type: 'ghost' },
                            ...walls.reduce((acc, wall, idx) => {
                                acc[`wall${idx}`] = {
                                    body: wall,
                                    size: {
                                        width: wall.bounds.max.x - wall.bounds.min.x,
                                        height: wall.bounds.max.y - wall.bounds.min.y,
                                    },
                                    renderer: Wall,
                                };
                                return acc;
                            }, {}),
                            ...dots.reduce((acc, dot, idx) => {
                                acc[`dot${idx}`] = {
                                    body: dot,
                                    size: 10,
                                    renderer: Dot,
                                    type: 'dot',
                                };
                                return acc;
                            }, {}),
                        }}>
                        <StatusBar hidden />
                    </GameEngine>
                    <Text style={styles.score}>Score: {score}</Text>
                </>
            ) : (
                <TouchableOpacity style={styles.startButton} onPress={() => {
                    setScore(0);
                    setRunning(true);
                }}>
                    <Text style={styles.startText}>Start Game</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    engine: { flex: 1 },
    score: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontSize: 20,
    },
    startButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText: {
        color: 'white',
        fontSize: 24,
    },
});
