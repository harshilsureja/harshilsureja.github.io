import React from 'react';
import { Flex, Text, Title } from '@mantine/core';

export const About = ({ about }: { about: string }) => {
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100}>
        About
      </Title>
      <Text
        w={'50%'}
        miw={300}
        sx={(theme) => ({
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: 'justify',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        {about}
      </Text>
    </Flex>
  );
};

export default About;
