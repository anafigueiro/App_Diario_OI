import { NativeBaseProvider, extendTheme } from 'native-base';
import { AuthProvider } from './src/context/authContext';
import { AnalysisProvider } from './src/context/analysisContext';

import { Routes } from './src/routes/index.routes.js';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#5B8DF6',
      800: '#ffffff',
      700: '#ffffff',
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <AnalysisProvider>
          <Routes />
        </AnalysisProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}
