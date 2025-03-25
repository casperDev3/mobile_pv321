import React from 'react';
import { View } from 'react-native';

const Dot = ({ body, size }: any) => {
    const width = size;
    const height = size;
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
                backgroundColor: 'white',
                borderRadius: width / 2,
            }}
        />
    );
};

export default Dot;
