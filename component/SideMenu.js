import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, ViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { CardSection } from './CardSection';

const contextTypes = {
  drawer: PropTypes.object
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    padding: 15,
    height: 45,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  textStyle: {
    fontSize: 18,
    color: '#555',
  },
  nameContainer: {
    padding: 15,
    height: 45,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  name: {
    fontSize: 18,
    color: '#555',
    fontWeight: '300'
  }
});

class SideMenu extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.sceneStyle]}>
        <CardSection style={{ flexDirection: 'column', paddingTop: 50 }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../img/user.png')}/>
            <Button
              containerStyle={styles.container}
              style={styles.name}
              onPress={() => { Actions.profile(); }}>
              User Name
            </Button>
          </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'column', borderBottomWidth: 0 }}>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => { Actions.scarlet(); }}>
            Scarlet
          </Button>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => Actions.white()}>
            White
          </Button>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => Actions.black()}>
            Black
          </Button>          
        </CardSection>
      </View>
    );
  }
}

SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;

export default SideMenu;