import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles, loadTheme } from 'office-ui-fabric-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '100vw'
    }
  }
});



// loadTheme({
//   palette: {
//     themePrimary: '#db0011',
//     themeLighterAlt: '#fef3f4',
//     themeLighter: '#f9d1d5',
//     themeLight: '#f4abb1',
//     themeTertiary: '#ea5d69',
//     themeSecondary: '#e01b2b',
//     themeDarkAlt: '#c50010',
//     themeDark: '#a7000e',
//     themeDarker: '#7b000a',
//     neutralLighterAlt: '#f3f3f3',
//     neutralLighter: '#efefef',
//     neutralLight: '#e5e5e5',
//     neutralQuaternaryAlt: '#d6d6d6',
//     neutralQuaternary: '#cccccc',
//     neutralTertiaryAlt: '#c4c4c4',
//     neutralTertiary: '#595959',
//     neutralSecondary: '#373737',
//     neutralPrimaryAlt: '#2f2f2f',
//     neutralPrimary: '#000000',
//     neutralDark: '#151515',
//     black: '#0b0b0b',
//     white: '#fafafa',
//   }
// });


ReactDOM.render(<App />, document.getElementById('app'));
