import React, { useEffect } from 'react';
import { Blockquote, Box, Flex, Group } from '@mantine/core';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';
import { Source_Serif_4 } from 'next/font/google';
import { IconQuote } from '@tabler/icons-react';

const SourceSerifPro = Source_Serif_4({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
});

export const Quote = () => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Group justify={'center'} mb={'md'}>
      <Blockquote
        color={theme_name != THEME_NAME.rainbow ? '' : 'lime'}
        cite='— Harshil Sureja'
        className={SourceSerifPro.className}
        icon={<IconQuote />}
      >
        {"Problem doesn't exist without solution."}
      </Blockquote>
    </Group>
  );
};

export default Quote;
