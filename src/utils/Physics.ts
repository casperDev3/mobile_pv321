import Matter from 'matter-js';

const PACMAN_SPEED = 4; // Швидкість руху Pac-Man (збільшена для швидшого руху)

const movePacman = (pacman: any, direction: string) => {
    let velocity = { x: 0, y: 0 };

    if (direction === 'up') velocity.y = -PACMAN_SPEED;
    else if (direction === 'down') velocity.y = PACMAN_SPEED;
    else if (direction === 'left') velocity.x = -PACMAN_SPEED;
    else if (direction === 'right') velocity.x = PACMAN_SPEED;

    Matter.Body.setVelocity(pacman.body, velocity);
};

const Physics = (entities: any, { touches }: any) => {
    const swipe = touches.find((t: any) => t.type === 'move');

    if (swipe) {
        const { delta } = swipe;
        const pacman = entities.pacman;

        const absDx = Math.abs(delta.pageX);
        const absDy = Math.abs(delta.pageY);

        if (absDx > absDy) {
            movePacman(pacman, delta.pageX > 0 ? 'right' : 'left');
        } else {
            movePacman(pacman, delta.pageY > 0 ? 'down' : 'up');
        }
    }

    Matter.Engine.update(entities.physics.engine, 16);

    return entities;
};

export default Physics;
