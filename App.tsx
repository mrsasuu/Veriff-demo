/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import VeriffSdk from '@veriff/react-native-sdk';

function App(): JSX.Element {
  const handleVeriff = useCallback(async () => {
    console.log('veriffSDK', VeriffSdk);
    const sessionToken = 'PASTE A NEW SESSION TOKEN';

    const result = await VeriffSdk.launchVeriff({
      sessionToken,
    });

    console.log('veriff result', result);
  }, []);

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 20,
        padding: 12,
        borderRadius: 10,
        backgroundColor: 'black',
      }}
      onPress={handleVeriff}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Start verification
      </Text>
    </TouchableOpacity>
  );
}

export default App;
