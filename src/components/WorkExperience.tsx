import React from 'react';
import { Badge, Flex, Text, Timeline, Title } from '@mantine/core';

export const WorkExperience = ({ workExperience }: any) => {
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Work experience
      </Title>
      <Timeline active={0} bulletSize={16} lineWidth={4}>
        {workExperience.jobs.map((ele: any, i: number) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge>{ele.position}</Badge>
                <Text mx={8} fz='sm' c='dimmed'>
                  {ele.name}
                </Text>
              </Flex>
            }
            key={i}
            lineVariant={ele.position == 'Intern' ? 'dashed' : 'solid'}
          >
            <Text>{ele.description}</Text>
            <Text size='xs' mt={4} italic c='dimmed'>
              {ele.year.start}
              {ele.year.end != 0 && ' - ' + ele.year.end}
              {'  '}({ele.duration})
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flex>
  );
};

export default WorkExperience;
