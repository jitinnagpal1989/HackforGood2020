import * as React from 'react';
import { Text, View } from 'react-native';

export const HomeScreen = React.memo(() => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
});