import React, { useEffect } from 'react';
import { Badge, Flex, Text, Timeline, Title } from '@mantine/core';
import { IJob, IWorkExperience } from '../types';
import { THEME_NAME } from '../enum';
import { useSelector } from 'react-redux';

export const WorkExperience = ({
  workExperience,
}: {
  workExperience: IWorkExperience;
}) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Work experience
      </Title>
      <Timeline
        active={0}
        bulletSize={16}
        lineWidth={4}
        color={theme_name != THEME_NAME.rainbow ? '' : 'pink'}
      >
        {workExperience.jobs.map((ele: IJob, i: number) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge color={theme_name != THEME_NAME.rainbow ? '' : 'pink'}>
                  {ele.position}
                </Badge>
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
