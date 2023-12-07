import React from 'react';
import {
  Box,
  Center,
  Container,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

export const About = ({ about }: { about: string }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container>
      <Center>
        <Title order={3} mb={'md'}>
          About
        </Title>
      </Center>
      <Center>
        <Box
          w={'50%'}
          miw={300}
          style={{
            background:
              colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: 'justify',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          }}
        >
          <Text>{about}</Text>
        </Box>
      </Center>
    </Container>
  );
};

export default About;
