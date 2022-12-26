import React from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { IOtherSkill } from '../types';
import { THEME_NAME } from '../enum';

export const OtherSkills = ({ otherSkills }: { otherSkills: IOtherSkill }) => {
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100}>
        Other skills
      </Title>
      <Title order={6} c='dimmed'>
        Cloud
      </Title>
      <Flex gap={16} mb={8}>
        {otherSkills.cloud.map((ele: string) => (
          <Badge color={themeName ? '' : 'cyan'} size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

export default OtherSkills;
