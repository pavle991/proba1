import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function CreatorWizardScreen({ navigation }) {
  const [name, setName] = useState('');
  const [cover, setCover] = useState('');

  const handleCreate = async () => {
    // call edge function become_creator
    try {
      // TODO: connect wallet & get userId
      const res = await fetch('http://localhost:54321/functions/v1/become_creator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'TODO', channelName: name, coverUrl: cover, wallet: 'TODO' })
      });
      const { token_address } = await res.json();
      // show token_address or copy
      Clipboard.setString(token_address);
      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Become Creator</Text>
      <TextInput placeholder="Channel Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Cover URL" value={cover} onChangeText={setCover} style={styles.input} />
      <Button title="Create Channel" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#000' },
  title: { fontSize: 24, color: '#fff', marginBottom: 16 },
  input: { backgroundColor: '#222', color: '#fff', padding: 8, marginBottom: 12, borderRadius: 4 }
});
