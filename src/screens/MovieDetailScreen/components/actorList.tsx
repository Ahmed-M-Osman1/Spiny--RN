import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../styles';

export default function ActorList({ actors }) {
  type actor = {
    name: string;
    asCharacter: string;
    image: string;
  };

  return (
    <View>
      <Text style={styles.Title}>Movie Actors</Text>
      {actors.map((item: actor, index: number) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              height: 110,
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                alignSelf: 'center',
                margin: 5,
              }}
              resizeMode="stretch"
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 20,
                  marginBottom: 5,
                }}
              >
                Actor: {item.name}
              </Text>
              <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                Character: {item.asCharacter}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
