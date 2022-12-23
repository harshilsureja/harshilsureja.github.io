import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { wrapper } from '../src/store/store';
import { useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };
  const theme = useMantineTheme();
  const ignoreColors: string[] = ['dark', 'gray', 'green', 'yellow'];
  const swatches: any = Object.keys(theme.colors).filter((color) => {
    return !ignoreColors.includes(color) && theme.colors[color][5];
  });
  return (
    <>
      <Head>
        <title>Harshil Sureja</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: swatches[Math.floor(Math.random() * swatches.length)],
            // primaryColor: 'teal',
            /** Put your mantine theme override here */
            colorScheme,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
