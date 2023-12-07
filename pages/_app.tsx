import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

function App({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();
  // const theme = createTheme({ primaryColor: 'green' });
  // const theme = useMantineTheme();

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
      // theme={{
      //   primaryColor: swatches[Math.floor(Math.random() * swatches.length)],
      // }}
      // theme={{ theme }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default App;
