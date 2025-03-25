import React from 'react';
import { View } from 'react-native';

const Wall = ({ body, size, color }: any) => {
    const width = size.width;
    const height = size.height;
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
                backgroundColor: color || 'blue',
            }}
        />
    );
};

export default Wall;
