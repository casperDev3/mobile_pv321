import React from 'react';
import { View } from 'react-native';

const Ghost = ({ body, color }: any) => {
    const width = 30;
    const height = 30;
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
                backgroundColor: color || 'red',
                borderRadius: 5,
            }}
        />
    );
};

export default Ghost;
