import React from 'react';
import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Flex,
  Grid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Stain } from './Stain';
import { IContact } from '../types';
import { contactList } from '../types/contact';
import { STAIN_VARIANT, THEME_NAME } from '../enum';

export const Contact = ({ contactDetails }: { contactDetails: IContact[] }) => {
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  const theme = useMantineTheme();
  return (
    <Flex
      gap={16}
      direction='column'
      align={'center'}
      style={{ position: 'relative' }}
    >
      <Stain
        w={250}
        h={150}
        ml={32}
        opacity={0.5}
        blur={16}
        radius={'50%'}
        transform={['30%', '50%']}
        color={themeName ? '' : 'green'}
        variant={STAIN_VARIANT.contact}
      />
      <Title order={3} weight={100}>
        Contact
      </Title>
      <Grid justify={'center'} align={'center'} gutter={16}>
        {contactDetails.map((ele: IContact, i: number) => {
          const Icon = contactList[ele.platform];
          return (
            <Grid.Col key={i} w={16 * 11} span={4}>
              <Card
                shadow={''}
                radius={'md'}
                style={{
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? `fade(${theme.colors.dark[6]},0.2)`
                      : `fade(${theme.colors.gray[0]},0.2)`,
                  background: 0.2,
                  // background: 'rgba(255, 255, 255, 0.2)',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Flex>
                  <ActionIcon
                    size={'xl'}
                    radius='md'
                    variant='light'
                    color={themeName ? '' : 'green'}
                    mr='md'
                  >
                    <Icon size={24} />
                  </ActionIcon>
                  <Box>
                    <Text size='xs' c={'dimmed'}>
                      {ele.platform}
                    </Text>
                    <Text>
                      <Anchor href={ele.link} color={themeName ? '' : 'green'}>
                        {ele.text}
                      </Anchor>
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Contact;
