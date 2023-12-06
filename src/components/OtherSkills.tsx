import React, { useEffect } from 'react';
import { Badge, Box, Center, Container,  Group, Space, Title } from '@mantine/core';
import { IOtherSkill } from '../types';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const OtherSkills = ({ otherSkills }: { otherSkills: IOtherSkill }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Container>
      <Center >
      <Title order={3} mb={'sm'}>
        Other skills
      </Title></Center>
      <Center>
      <Title order={6} c='dimmed' mb={'md'}>
        Cloud
      </Title>
      </Center>
      <Group justify='center'>
        {otherSkills.cloud.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'cyan'}
            size='lg'
            variant='light'
            key={ele}
          >
            {ele}
          </Badge>
        ))}</Group>
    </Container>
  );
};

export default OtherSkills;
