import React from 'react';
import {
  Badge,
  Center,
  Container,
  Group,
  Text,
  Timeline,
  Title,
  em,
} from '@mantine/core';
import { IJob, IWorkExperience } from '../types';
import { useMediaQuery } from '@mantine/hooks';

export const WorkExperience = ({
  workExperience,
}: {
  workExperience: IWorkExperience;
}) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Container>
      <Center>
        <Title order={3} mb={'md'}>
          Work experience
        </Title>
      </Center>
      <Group justify='center'>
        <Timeline
          active={0}
          bulletSize={16}
          lineWidth={4}
          maw={isMobile ? '90%' : '70%'}
          color={'pink'}
        >
          {workExperience.jobs.map((ele: IJob, i: number) => (
            <Timeline.Item
              title={
                <Group align={'center'} gap={'sm'}>
                  <Badge color={'pink'} variant='light'>
                    {ele.position}
                  </Badge>
                  <Text mx={8} fz='sm' c='dimmed'>
                    {ele.name}
                  </Text>
                </Group>
              }
              key={i}
              lineVariant={ele.position == 'Intern' ? 'dashed' : 'solid'}
            >
              <Text>{ele.description}</Text>
              <Text size='xs' mt={4} fs={'italic'} c='dimmed'>
                {ele.year.start}
                {ele.year.end != 0 && ' - ' + ele.year.end}
                {'  '}({ele.duration})
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Group>
    </Container>
  );
};

export default WorkExperience;
