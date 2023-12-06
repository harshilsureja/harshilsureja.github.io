import React, { useEffect } from 'react';
import {
  Anchor,
  Badge,
  Center,
  Code,
  Container,
  Group,
  Text,
  Timeline,
  Title,
  em,
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
import { useMediaQuery } from '@mantine/hooks';

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
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Container>
      <Center >
      <Title order={3} mb={'sm'}>
        Personal projects
      </Title></Center>
      <Stain
        w={150}
        h={150}
        opacity={0.2}
        blur={16}
        radius={'50%'}
        ml={{ base: '0', sm: '512px' }}
        mt={{ base: '0', sm: '-48px' }}
        color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
        variant={STAIN_VARIANT.projects}
      />
      <Center >
      <Title order={6} c='dimmed' mb={'sm'}>
        <Code m={'auto'} className={FiraCode.className}>{personalProjects.tagLine}</Code>
      </Title></Center>
      <Group justify='center'>
      <Timeline
        active={4}
        bulletSize={16}
        lineWidth={4}
        maw={isMobile?'90%':'70%'}
        color={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
      >
        {personalProjects.projects.map((ele: IProject, i: number) => (
          <Timeline.Item
            title={
              <Group align={'center'} gap={'sm'}>
                <Badge color={theme_name != THEME_NAME.rainbow ? '' : 'grape'} variant='light'>
                  {ele.stack}
                </Badge>
                <Text fz='sm' c='dimmed'>
                  {ele.name}
                </Text>
              </Group>
            }
            key={i}
          >
            <Text>{ele.description}</Text>
            <Anchor
              href={ele?.link}
              target='_blank'
              c={theme_name != THEME_NAME.rainbow ? '' : 'grape'}
            >
              {ele?.link}
            </Anchor>
            <Group align={'center'} mt={'sm'} gap={'md'}>
              <Text size='xs' fs={'italic'} c='dimmed'>
                {ele.year}
              </Text>
              <Badge
                color={PROJECT_STATUS_BADGE_COLOR[ele.status]}
                size='sm'
                variant='dot'
              >
                {PROJECT_STATUS[ele.status]}
              </Badge>
            </Group>
          </Timeline.Item>
        ))}
      </Timeline></Group>
    </Container>
  );
};

export default PersonalProjects;
