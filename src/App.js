import { useRoutes, useLocation } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { Web3Provider } from './contexts/web3-context';


function App() {
  const content = useRoutes(router);
  const { pathname } = useLocation()
  return (
    <>
      {pathname != '/'
        ?
        <ThemeProvider >
          <Web3Provider>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {content}
            </LocalizationProvider>
          </Web3Provider>
          </ThemeProvider>
        :
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
        </LocalizationProvider>
      }
    </>
  );
}
export default App;
