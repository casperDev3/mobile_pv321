import React from 'react';
import { View } from 'react-native';

const Pacman = ({ body, color }: any) => {
    const width = body.circleRadius * 2;
    const height = body.circleRadius * 2;
    const x = body.position.x - width / 2;
    const y = body.position.y - height / 2;

    return (
        <View
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width,
                height,
                backgroundColor: color,
                borderRadius: width / 2,
            }}
        />
    );
};

export default Pacman;
