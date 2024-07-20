import React from 'react';
import { Badge, Center, Container, Group, Title } from '@mantine/core';

export const Languages = ({ languages }: { languages: string[] }) => {
  return (
    <Container>
      <Center>
        <Title order={3} mb={'md'}>
          Languages
        </Title>
      </Center>
      <Group justify='center'>
        {languages.map((ele: string) => (
          <Badge color={'teal'} size='lg' variant='light' key={ele}>
            {ele}
          </Badge>
        ))}
      </Group>
    </Container>
  );
};

export default Languages;
