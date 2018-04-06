import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from 'store/ducks/albums';

import { FlatList, StatusBar, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'styles';
import AlbumItem from './components/AlbumItem';
import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity
        onPress={() => { navigation.navigate('Search'); }}
        style={styles.headerRight}
      >
        <Icon name="search" size={24} color={colors.white} />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <FlatList
          data={this.props.albums.data}
          keyExtractor={album => String(album.id)}
          renderItem={({ item }) => (
            <AlbumItem
              album={item}
              onPress={() => this.props.navigation.navigate('Album', { album: item })}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
