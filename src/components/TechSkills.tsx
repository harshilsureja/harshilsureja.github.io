import React from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { ITechSkill } from '../types';
import { THEME_NAME } from '../enum';

export const TechSkills = ({ techSkills }: { techSkills: ITechSkill }) => {
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100} m={16}>
        Tech skills
      </Title>
      <Title order={6} c='dimmed'>
        Frontend
      </Title>
      <Flex gap={16} mb={8}>
        {techSkills.frontEnd.map((ele: string) => (
          <Badge color={themeName ? '' : 'violet'} size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
      <Title order={6} c='dimmed'>
        Backend
      </Title>
      <Flex gap={16} mb={8}>
        {techSkills.backEnd.map((ele: string) => (
          <Badge color={themeName ? '' : 'indigo'} size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
      <Title order={6} c='dimmed'>
        Database
      </Title>
      <Flex gap={16} mb={8}>
        {techSkills.database.map((ele: string) => (
          <Badge color={themeName ? '' : 'blue'} size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

export default TechSkills;
