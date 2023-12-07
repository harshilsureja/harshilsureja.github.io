import React, { useEffect } from 'react';
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
import { ICollege, IEduction } from '../types';
import { useMediaQuery } from '@mantine/hooks';

export const Education = ({ education }: { education: IEduction }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Container>
      <Center>
        <Title order={3} mb={'md'}>
          Education
        </Title>
      </Center>
      <Group justify='center'>
        <Timeline
          active={1}
          bulletSize={16}
          lineWidth={4}
          maw={isMobile ? '90%' : '100%'}
          color={'red'}
        >
          {education.colleges.map((ele: ICollege) => (
            <Timeline.Item
              title={
                <Group align={'center'} gap={'sm'}>
                  <Badge color={'red'} variant='light'>
                    {ele.courseTag}
                  </Badge>
                  <Text mx={8} fz='sm' c='dimmed'>
                    {ele.course}
                  </Text>
                </Group>
              }
              key={ele.courseTag}
            >
              <Text>{ele.name}</Text>
              <Text size='xs' mt={4} fs={'italic'} c='dimmed'>
                {ele.year.start}
                {' - '}
                {ele.year.end}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Group>
    </Container>
  );
};

export default Education;
