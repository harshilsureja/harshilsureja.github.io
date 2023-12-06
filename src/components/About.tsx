import React from 'react';
import {  Center, Container,  Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export const About = ({ about }: { about: string }) => {
  const theme = useMantineTheme();
  const schema = useMantineColorScheme();
  return (
    <Container>
      <Center>
      <Title order={3} mb={'md'}>
        About
      </Title>
      </Center>
      <Center>
      <Text
        w={'50%'}
        miw={300}
        style={{
          background:
            schema.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: 'justify',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,

        }}
      >
        {about}
      </Text></Center>
    </Container>
  );
};

export default About;
