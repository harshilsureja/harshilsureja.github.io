import React from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { THEME_NAME } from '../enum';

export const Languages = ({ languages }: { languages: string[] }) => {
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100}>
        Languages
      </Title>
      <Flex gap={16} mb={8}>
        {languages.map((ele: string) => (
          <Badge color={themeName ? '' : 'teal'} size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

export default Languages;
