import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    if (!result.cancelled) setVideoUri(result.uri);
  };

  const handleUpload = async () => {
    if (videoUri) {
      // upload via Livepeer API
      const form = new FormData();
      form.append('file', { uri: videoUri, name: 'video.mp4', type: 'video/mp4' } as any);
      const res = await fetch('https://livepeer.studio/api/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.LIVEPEER_API_KEY}` },
        body: form
      });
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Video" onPress={pickVideo} />
      <Button title="Upload" onPress={handleUpload} disabled={!videoUri} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#000' } });
