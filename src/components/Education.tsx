import React from 'react';
import { Badge, Flex, Text, Timeline, Title } from '@mantine/core';
import { ICollege, IEduction } from '../types';
import { THEME_NAME } from '../enum';

export const Education = ({ education }: { education: IEduction }) => {
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Education
      </Title>
      <Timeline
        active={1}
        bulletSize={16}
        lineWidth={4}
        color={themeName ? '' : 'red'}
      >
        {education.colleges.map((ele: ICollege) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge color={themeName ? '' : 'red'}>{ele.courseTag}</Badge>
                <Text mx={8} fz='sm' c='dimmed'>
                  {ele.course}
                </Text>
              </Flex>
            }
            key={ele.courseTag}
          >
            <Text>{ele.name}</Text>
            <Text size='xs' mt={4} italic c='dimmed'>
              {ele.year.start}
              {' - '}
              {ele.year.end}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flex>
  );
};

export default Education;
