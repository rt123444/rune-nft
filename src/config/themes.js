import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

const themes = [
  {
    id: 'default',
    source: {
      palette: {
        primary: { main: '#343434' },
        secondary: {
          main: '#c62828',
        },
      },
      typography: {
        fontFamily: 'Raleway, Arial',
      },
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
      typography: {
        fontFamily: 'Raleway, Arial',
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
      typography: {
        fontFamily: 'Raleway, Arial',
      },
    },
  },
  {
    id: 'standard',
  },
]

export default themes
