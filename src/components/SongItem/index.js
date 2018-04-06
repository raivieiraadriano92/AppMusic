import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SongItem = ({ song }) => (
  <TouchableOpacity
    onPress={() => {}}
    style={styles.container}
  >
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    <Icon name="play-circle-outline" size={24} style={styles.play} />
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongItem;
