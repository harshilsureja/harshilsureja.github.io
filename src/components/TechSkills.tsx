import React from 'react';
import { Badge, Center, Container, Group, Title } from '@mantine/core';
import { ITechSkill } from '../types';

export const TechSkills = ({ techSkills }: { techSkills: ITechSkill }) => {
  return (
    <Container>
      <Center mb={'sm'}>
        <Title order={3}>Tech skills</Title>
      </Center>
      <Center>
        <Title order={6} c='dimmed' mb={'md'}>
          Frontend
        </Title>
      </Center>
      <Group justify='center' mb={'md'}>
        {techSkills.frontEnd.map((ele: string) => (
          <Badge color={'violet'} size='lg' variant='light' key={ele}>
            {ele}
          </Badge>
        ))}
      </Group>
      <Center>
        <Title order={6} c='dimmed' mb={'md'}>
          Backend
        </Title>
      </Center>
      <Group justify='center' mb={'md'}>
        {techSkills.backEnd.map((ele: string) => (
          <Badge color={'indigo'} size='lg' variant='light' key={ele}>
            {ele}
          </Badge>
        ))}
      </Group>
      <Center>
        <Title order={6} c='dimmed' mb={'md'}>
          Database
        </Title>
      </Center>
      <Group justify='center' mb={'md'}>
        {techSkills.database.map((ele: string) => (
          <Badge color={'blue'} size='lg' variant='light' key={ele}>
            {ele}
          </Badge>
        ))}
      </Group>
    </Container>
  );
};

export default TechSkills;
