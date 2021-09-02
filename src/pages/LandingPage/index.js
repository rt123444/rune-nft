import React, { useState, lazy, Suspense } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Instagram from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { Helmet } from 'react-helmet'
import Paper from '@material-ui/core/Paper'
import { Scrollbars } from 'react-custom-scrollbars'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { useHistory } from 'react-router-dom'
import { useTheme as useAppTheme } from 'material-ui-shell/lib/providers/Theme'

const PageContent = lazy(() => import('./PageContent'))
const Footer = lazy(() => import('./Footer'))
const ResponsiveMenu = lazy(() =>
  import('rmw-shell/lib/containers/ResponsiveMenu')
)

const theme = createMuiTheme({
  palette: {
    primary: { main: '#242424' },
    secondary: {
      main: '#c62828',
    }
  },
  typography: {
    fontFamily: 'Garamond'
  }
})

const LandingPage = () => {
  const [scrollbar, setScrollbar] = useState(null)
  const [transparent, setTransparent] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [components, setComponents] = useState(null)
  const [top, setTop] = useState(null)
  const history = useHistory()
  const { isRTL } = useAppTheme()

  const scrollTo = (e) => {
    e &&
      e.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      })
  }

  const sections = [
    {
      name: 'start',
      onClick: () => history.push('/dashboard'),
    },
    {
      name: 'components',
      onClick: () => {
        setScrolled(true)
        setTimeout(() => {
          scrollTo(components)
        }, 500)
      },
    },
  ]
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;
  
  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };
  
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div style={{fontSize: '32px'}}>{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
const endTime = startTime + 243248; // use UNIX timestamp in seconds

const remainingTime = endTime - startTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.react-most-wanted.com" />
          <meta
            name="keywords"
            content={
              'react,pwa,material-ui,redux,boilerplate,lighthouse,gdg,react.js'
            }
          />
          <meta
            name="description"
            content={
              'React PWA boilerplate that is using create-react-app and firebase '
            }
          />

          <title>React Most Wanted</title>
        </Helmet>
        <Scrollbars
          ref={(e) => {
            if (e !== null) {
              setScrollbar(e)
            }
          }}
          renderView={props => (
            isRTL ? <div {...props} style={{
              ...props.style,
              marginLeft: props.style.marginRight,
              marginRight: 0, }} /> : <div {...props} style={{
                ...props.style,}} />
          )}
          onScroll={(e) => {
            setTransparent(scrollbar.viewScrollTop < 100)
            setScrolled(true)
          }}
          autoHide
          style={{ width: '100%', height: '100vh' }}
        > 
          <AppBar
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: transparent ? 'transparent' : undefined,
              boxShadow: transparent ? 'none' : undefined,
              transition: 'background 1s',
            }}
            position="static"
          >
            <Toolbar disableGutters>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  scrollTo(top)
                }}
              >
                <img
                  src={'/celtic-knot.svg'}
                  alt="logo"
                  style={{
                    height: 35,
                    justifySelf: 'center',
                    color: 'white',
                    marginLeft: 12,
                    display: transparent ? 'none' : undefined,
                  }}
                />
              </div>
              <div style={{ flex: 1 }} />
                <img
                    src={'/twitter.svg'}
                    alt="logo"
                    style={{
                      height: 35,
                      justifySelf: 'center',
                      color: 'white',
                      marginLeft: 12,
                      display: transparent ? 'none' : undefined,
                    }}
                  />              {/* <Suspense fallback={<CircularProgress />}>
                <ResponsiveMenu sections={sections} />
              </Suspense> */}
            </Toolbar>
          </AppBar>
          <div style={{ width: '100%', height: '100%' }}>
            <div
              ref={(r) => r && setTop(r)}
              style={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'black',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                minHeight: 600,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={'/celtic-knot.svg'}
                  alt="logo"
                  style={{ height: 150, maxWidth: 280, justifySelf: 'center' }}
                />

                <div style={{ padding: 8 }}>
                  <h3
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 50,
                      margin: '10px'
                    }}
                  >
                    RUNE NFT
                  </h3>
                  <div style={{width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 18, margin: '10px', color: 'red'}}>
                    <div style={{width: '200px', display: 'flex', justifyContent: 'center'}}>
                      <div style={{margin: '10px auto'}}><FacebookIcon ></FacebookIcon></div>
                      <div style={{margin: '10px auto'}}><TwitterIcon ></TwitterIcon></div>
                      <div style={{margin: '10px auto'}}><Instagram ></Instagram></div>
                    </div>
                  </div>
                  <div style={{width: '600px'}}>
                    <h4
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 18,
                        margin: '10px',
                      }}
                    >
                      Rune is an NFT collection of magical letters. 
                      Letters can be combined to trade-in for a magical word. 
                      When a word is minted no one can ever mint that same word and the original letters will be burned forever. 
                      Original letters are limited with only 5200 ever made.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -80,
              }}
            >
            </div>
          </div>
        </Scrollbars>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default LandingPage
