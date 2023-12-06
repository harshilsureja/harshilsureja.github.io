import React, { useEffect } from 'react';
import { Badge, Center, Container, Flex, Group, Title } from '@mantine/core';
import { ITechSkill } from '../types';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const TechSkills = ({ techSkills }: { techSkills: ITechSkill }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
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
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'violet'}
            size='lg'
            variant='light'
            key={ele}
          >
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
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'indigo'}
            size='lg'
            variant='light'
            key={ele}
          >
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
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'blue'}
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

export default TechSkills;
