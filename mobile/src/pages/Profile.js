import React from 'react';
import { WebView } from 'react-native-webview';

const Profile = ({ navigation }) => {
  const github_username = navigation.state.params.github_username;

  console.log('github_username:', github_username)

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${github_username}` }}
    />
  );
};

export default Profile;