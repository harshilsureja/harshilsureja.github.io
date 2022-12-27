import React, { useEffect } from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { ITechSkill } from '../types';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const TechSkills = ({ techSkills }: { techSkills: ITechSkill }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100} m={16}>
        Tech skills
      </Title>
      <Title order={6} c='dimmed'>
        Frontend
      </Title>
      <Flex gap={16} mb={8} justify={'center'} wrap={'wrap'}>
        {techSkills.frontEnd.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'violet'}
            size='lg'
            key={ele}
          >
            {ele}
          </Badge>
        ))}
      </Flex>
      <Title order={6} c='dimmed'>
        Backend
      </Title>
      <Flex gap={16} mb={8} justify={'center'} wrap={'wrap'}>
        {techSkills.backEnd.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'indigo'}
            size='lg'
            key={ele}
          >
            {ele}
          </Badge>
        ))}
      </Flex>
      <Title order={6} c='dimmed'>
        Database
      </Title>
      <Flex gap={16} mb={8} justify={'center'} wrap={'wrap'}>
        {techSkills.database.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'blue'}
            size='lg'
            key={ele}
          >
            {ele}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

export default TechSkills;
