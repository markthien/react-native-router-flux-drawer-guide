import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Router, Scene, Stack, Tabs, Drawer } from 'react-native-router-flux';
import ScarletScreen from './component/ScarletScreen';
import ProfileScreen from './component/ProfileScreen';
import WhiteScreen from './component/WhiteScreen';
import BlackScreen from './component/BlackScreen';
import SideMenu from './component/SideMenu';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
            <Drawer key="drawer" drawerImage={require('./img/hamburger.png')} contentComponent={SideMenu}>
              <Scene key="main">
                  <Scene
                      key="scarlet"
                      component={ScarletScreen}
                      title="Scarlet Screen"
                      initial
                  />
                  <Scene
                      key="profile"
                      component={ProfileScreen}
                      title="Profile"
                  />
                  <Scene
                    key="white"
                    component={WhiteScreen}
                    title="White Screen"
                  />
                  <Scene
                    key="black"
                    component={BlackScreen}
                    title="Black Screen"                    
                  />                                  
              </Scene>
            </Drawer>           
          </Scene>
      </Router>     
    );
  }
}
