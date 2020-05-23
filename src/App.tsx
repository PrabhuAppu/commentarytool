import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';

import logo from './fabric.png';


import { NavHorizontalStack } from './Navbar';
import {ContainerHorizontalStack} from './Container';
// import { initializeIcons } from '@uifabric/icons';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {
  createTheme,
  Customizations
} from 'office-ui-fabric-react';

import { loadTheme } from 'office-ui-fabric-react';

initializeIcons();



const myTheme = createTheme({
  palette: {
    themePrimary: '#db0011',
    themeLighterAlt: '#fef3f4',
    themeLighter: '#f9d1d5',
    themeLight: '#f4abb1',
    themeTertiary: '#ea5d69',
    themeSecondary: '#e01b2b',
    themeDarkAlt: '#c50010',
    themeDark: '#a7000e',
    themeDarker: '#7b000a',
    neutralLighterAlt: '#f3f3f3',
    neutralLighter: '#efefef',
    neutralLight: '#e5e5e5',
    neutralQuaternaryAlt: '#d6d6d6',
    neutralQuaternary: '#cccccc',
    neutralTertiaryAlt: '#c4c4c4',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#fafafa',
  }});

const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
};




export const App: React.FunctionComponent = () => {
  Customizations.applySettings({ theme: myTheme });
  return (
    <React.Fragment>
      <NavHorizontalStack />
      
      <ContainerHorizontalStack/>
    </React.Fragment>
  );
};
