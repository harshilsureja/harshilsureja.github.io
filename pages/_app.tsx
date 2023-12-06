import '@mantine/core/styles.css';
// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  // MantineColorScheme,
  MantineProvider,
  // localStorageColorSchemeManager,
  // useMantineTheme,
} from '@mantine/core';
import { wrapper } from '../src/store/store';
// import { useState } from 'react';
// import { updateColorSchema } from '../src/store/reducers/slice/theme';
// import { useDispatch } from 'react-redux';

function App({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();
  // const [colorScheme, setColorScheme] = useState<MantineColorScheme>('light');

  // const toggleColorScheme = (value?: MantineColorScheme) => {
  //   const nextColorScheme =
  //     value || (colorScheme === 'dark' ? 'light' : 'dark');
  //   setColorScheme(nextColorScheme);
  //   dispatch(updateColorSchema(nextColorScheme));
  // };
  // const theme = useMantineTheme();
  // const ignoreColors: string[] = ['dark', 'gray', 'green', 'yellow'];
  // const swatches: string[] = Object.keys(theme.colors).filter((color) => {
  //   return !ignoreColors.includes(color) && theme.colors[color][5];
  // });
  return (
    <>
      <Head>
        <title>Harshil Sureja</title>
        {/* <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        /> */}
      </Head>
        <MantineProvider
        // defaultColorScheme='dark'
          // theme={{
          //   primaryColor: swatches[Math.floor(Math.random() * swatches.length)],
          // }}
        >
          <Component {...pageProps} />
        </MantineProvider>
    </>
  );
}

export default wrapper.withRedux(App);
