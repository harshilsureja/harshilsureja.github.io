import React, { useEffect } from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { IOtherSkill } from '../types';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const OtherSkills = ({ otherSkills }: { otherSkills: IOtherSkill }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100}>
        Other skills
      </Title>
      <Title order={6} c='dimmed'>
        Cloud
      </Title>
      <Flex gap={16} mb={8} justify={'center'} wrap={'wrap'}>
        {otherSkills.cloud.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'cyan'}
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

export default OtherSkills;
