import React from 'react';
import { Blockquote, Group } from '@mantine/core';
import { Source_Serif_4 } from 'next/font/google';
import { IconQuote } from '@tabler/icons-react';

const SourceSerifPro = Source_Serif_4({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
});

export const Quote = () => {
  return (
    <Group justify={'center'} mb={'md'}>
      <Blockquote
        color={'lime'}
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
