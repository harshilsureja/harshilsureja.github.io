import React, { useEffect } from 'react';
import { Badge, Box, Center, Container, Flex, Group, Space, Title } from '@mantine/core';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const Languages = ({ languages }: { languages: string[] }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Container>
      <Center >
      <Title order={3} mb={'md'}>
        Languages
      </Title>
      </Center>
      <Group justify='center'>
        {languages.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'teal'}
            size='lg'
            variant='light'
            key={ele}
          >
            {ele}
          </Badge>
        ))}
      </Group>
    </Container>
  );
};

export default Languages;
