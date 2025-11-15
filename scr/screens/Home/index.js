import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

function ItemList({ item }) {
  return (
    <View
      style={{
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{item.name}</Text>
    </View>
  );
}

function Home({ navigation }) {
  const DATA = [
    {
      name: 'Item 1',
      done: false,
    },
    {
      name: 'Item 2',
      done: false,
    },
    {
      name: 'Item 3',
      done: true,
    },
  ];


return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>

    <FlatList data={DATA} renderItem={ItemList} />

    <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detalhes')} />
  </View>
);

}

export default Home;
