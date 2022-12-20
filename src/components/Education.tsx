import React from 'react';
import { Badge, Flex, Text, Timeline, Title } from '@mantine/core';

export const Education = ({ education }: any) => {
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Education
      </Title>
      <Timeline active={1} bulletSize={16} lineWidth={4}>
        {education.colleges.map((ele: any) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge>{ele.courseTag}</Badge>
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
