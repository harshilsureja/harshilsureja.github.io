import React from 'react';
import {
  Anchor,
  Badge,
  Code,
  Flex,
  Text,
  Timeline,
  Title,
} from '@mantine/core';

export const PersonalProjects = ({ personalProjects }: any) => {
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Personal projects
      </Title>
      <Title order={6} c='dimmed'>
        <Code>{personalProjects.tagLine}</Code>
      </Title>
      <Timeline active={4} bulletSize={16} lineWidth={4}>
        {personalProjects.projects.map((ele: any, i: number) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge>{ele.stack}</Badge>
                <Text mx={8} fz='sm' c='dimmed'>
                  {ele.name}
                </Text>
              </Flex>
            }
            key={i}
            lineVariant={ele.position == 'Intern' ? 'dashed' : 'solid'}
          >
            <Text>{ele.description}</Text>
            <Anchor href={ele?.link} target='_blank'>
              {ele?.link}
            </Anchor>
            <Flex align={'center'} mt={4} gap={8}>
              <Text size='xs' italic c='dimmed'>
                {ele.year}
              </Text>
              <Badge color={PROJECT_STATUS_BADGE_COLOR[ele.status]} size='xs'>
                {PROJECT_STATUS[ele.status]}
              </Badge>
            </Flex>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flex>
  );
};

export default PersonalProjects;

enum PROJECT_STATUS {
  INACTIVE,
  LIVE,
  DISCONTINUED,
}

enum PROJECT_STATUS_BADGE_COLOR {
  yellow,
  green,
  gray,
}
