import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const holdings = [
  { id: '1', channel: 'Channel A', shares: 100, dividends: 5 },
  { id: '2', channel: 'Channel B', shares: 50, dividends: 2 }
];

export default function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfolio</Text>
      <FlatList
        data={holdings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.channel}</Text>
            <Text>Shares: {item.shares}</Text>
            <Text>Dividends: {item.dividends} USDC</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#000' },
  title: { fontSize: 24, color: '#fff', marginBottom: 16 },
  item: { marginBottom: 12, padding: 12, backgroundColor: '#222', borderRadius: 8 }
});
