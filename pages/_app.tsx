import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { wrapper } from '../src/store/store';

function App({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  const swatches: any = Object.keys(theme.colors).filter((color) => {
    return color != 'dark' && color != 'gray' && theme.colors[color][5];
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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: swatches[Math.floor(Math.random() * swatches.length)],
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default wrapper.withRedux(App);
