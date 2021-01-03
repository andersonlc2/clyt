import React from 'react';
import Toolbar from './components/Toolbar';
import RightBar from './components/RightBar';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#0660D6'
      }
    },
  });

  return (
    <ThemeProvider theme={ theme }>
      <div>
        <Toolbar />
      </div>
      <div>
        <RightBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
