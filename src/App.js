import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import RightBar from './components/RightBar';
import Area from './components/Area';
import Hidden from '@material-ui/core/Hidden';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const videos = [
  {
    id: 1,
    title: 'CASARES CHEGA BOMBANDO NO SÃO PAULO E JÁ MANDA RECADO',
    channel: 'CANAL SPFC',
    views: '15 mil visualizações',
    date: 'há 3 horas',
    avatar: '/images/7.jpg',
    thumb: '/images/1.jpg'
  },
  {
    id: 2,
    title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/2.jpg'
  },
  {
    id: 3,
    title: 'KRAWK x KANT',
    channel: 'Cortes Podepah [OFICIAL]',
    views: '387 mil visualizações',
    date: 'há 1 mês',
    avatar: '',
    thumb: '/images/3.jpg'
  },
  {
    id: 4,
    title: 'SAGA PAC-MAN: 30 ANOS, HISTÓRIA, CURIOSIDADES, TORU IWATANI E MAIS',
    channel: 'Zangado',
    views: '17 mil visualizações',
    date: 'há 6 horas',
    avatar: '/images/1.jpg',
    thumb: '/images/4.jpg'
  },
  {
    id: 5,
    title: 'GLOBO ESPORTE: MURICY DE VOLTA E ULTIMAS NOTICIAS DO SÃO PAULO',
    channel: 'Niow HD',
    views: '25 mil visualizações',
    date: 'há 3 horas',
    avatar: '/images/8.jpg',
    thumb: '/images/7.jpg'
  },
  {
    id: 6,
    title: 'Intensivo TypeScript: O mínimo que você precisa saber - Nova edição',
    channel: 'Full Cycle',
    views: '2,5 mil visualizações',
    date: 'Transmitido há 2 meses',
    avatar: '/images/3.jpg',
    thumb: '/images/5.jpg'
  },
  {
    id: 7,
    title: 'FEED DO USUÁRIO | Criando uma Rede Social',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/4.jpg',
    thumb: '/images/6.jpg'
  },
  {
    id: 8,
    title: 'Quanto você deve cobrar pelo seu trabalho',
    channel: 'Programador BR',
    views: '2,2 mil visualizações',
    date: 'há 7 horas',
    avatar: '',
    thumb: '/images/8.jpg'
  },
  {
    id: 9,
    title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/2.jpg'
  },
  {
    id: 10,
    title: 'Intensivo TypeScript: O mínimo que você precisa saber - Nova edição',
    channel: 'Full Cycle',
    views: '2,5 mil visualizações',
    date: 'Transmitido há 2 meses',
    avatar: '/images/3.jpg',
    thumb: '/images/5.jpg'
  },
  {
    id: 11,
    title: 'CASARES CHEGA BOMBANDO NO SÃO PAULO E JÁ MANDA RECADO',
    channel: 'CANAL SPFC',
    views: '15 mil visualizações',
    date: 'há 3 horas',
    avatar: '/images/7.jpg',
    thumb: '/images/1.jpg'
  },
  {
    id: 12,
    title: 'GLOBO ESPORTE: MURICY DE VOLTA E ULTIMAS NOTICIAS DO SÃO PAULO',
    channel: 'Niow HD',
    views: '25 mil visualizações',
    date: 'há 3 horas',
    avatar: '/images/8.jpg',
    thumb: '/images/7.jpg'
  },
]

function App() {
  const [ darkMode, setDarkMode ] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#ffffff',
      },
      secondary: {
        // main: '#0660D6'
        main: '#3ea6ff'
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff'
      }
    },
    typography: {
      fontSize: 12
    }
  });

  return (
    <ThemeProvider theme={ theme }>
  
      <div>
        <Toolbar darkMode={ darkMode } setDarkMode={ setDarkMode }/>
      </div>
      <div style={{ display: 'flex' }}>  
        <div>
          <Hidden mdDown>
            <RightBar darkMode={ darkMode } setDarkMode={ setDarkMode }/>
          </Hidden>
        </div>
        <div>
          <Area video={ videos } darkMode={ darkMode } setDarkMode={ setDarkMode }/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
