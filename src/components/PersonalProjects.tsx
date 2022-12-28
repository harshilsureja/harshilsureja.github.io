import React, { useEffect } from 'react';
import {
  Anchor,
  Badge,
  Code,
  Flex,
  Text,
  Timeline,
  Title,
} from '@mantine/core';
import { IPersonalProjects, IProject } from '../types';
import {
  PROJECT_STATUS,
  PROJECT_STATUS_BADGE_COLOR,
  STAIN_VARIANT,
  THEME_NAME,
} from '../enum';
import { Stain } from './Stain';
import { useSelector } from 'react-redux';
import { Fira_Code } from '@next/font/google';

const FiraCode = Fira_Code({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
});

export const PersonalProjects = ({
  personalProjects,
}: {
  personalProjects: IPersonalProjects;
}) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
  return (
    <Flex gap={16} direction='column' align={'center'} maw={500} m={'auto'}>
      <Title order={3} weight={100}>
        Personal projects
      </Title>
      <Stain
        w={150}
        h={150}
        opacity={0.2}
        blur={16}
        radius={'50%'}
        ml={{ base: '0', sm: '16%' }}
        color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
        variant={STAIN_VARIANT.projects}
      />
      <Title order={6} c='dimmed'>
        <Code className={FiraCode.className}>{personalProjects.tagLine}</Code>
      </Title>
      <Timeline
        active={4}
        bulletSize={16}
        lineWidth={4}
        color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
      >
        {personalProjects.projects.map((ele: IProject, i: number) => (
          <Timeline.Item
            title={
              <Flex align={'center'}>
                <Badge color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}>
                  {ele.stack}
                </Badge>
                <Text mx={8} fz='sm' c='dimmed'>
                  {ele.name}
                </Text>
              </Flex>
            }
            key={i}
          >
            <Text>{ele.description}</Text>
            <Anchor
              href={ele?.link}
              target='_blank'
              color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
            >
              {ele?.link}
            </Anchor>
            <Flex align={'center'} mt={4} gap={8}>
              <Text size='xs' italic c='dimmed'>
                {ele.year}
              </Text>
              <Badge
                color={PROJECT_STATUS_BADGE_COLOR[ele.status]}
                size='sm'
                variant='dot'
              >
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
