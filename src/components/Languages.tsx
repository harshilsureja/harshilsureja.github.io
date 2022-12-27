import React, { useEffect } from 'react';
import { Badge, Flex, Title } from '@mantine/core';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const Languages = ({ languages }: { languages: string[] }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex gap={16} direction='column' align={'center'}>
      <Title order={3} weight={100}>
        Languages
      </Title>
      <Flex gap={16} mb={8} justify={'center'} wrap={'wrap'}>
        {languages.map((ele: string) => (
          <Badge
            color={theme_name != THEME_NAME.rainbow ? '' : 'teal'}
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

export default Languages;
