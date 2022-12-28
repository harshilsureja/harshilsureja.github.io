import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux';

export const Contact = ({ contactDetails }: { contactDetails: IContact[] }) => {
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);
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
        opacity={0.5}
        blur={16}
        ml={{ base: '0', sm: '16%' }}
        mt={{ base: '16%', sm: '6%' }}
        radius={'50%'}
        color={theme_name != THEME_NAME.rainbow ? '' : 'green'}
        variant={STAIN_VARIANT.contact}
      />
      <Title order={3} weight={100}>
        Contact
      </Title>
      <Flex
        justify={'center'}
        align={'center'}
        gap={16}
        wrap={'wrap'}
        maw={'75%'}
      >
        {contactDetails.map((ele: IContact, i: number) => {
          const Icon = contactList[ele.platform];
          return (
            <Box key={i} miw={16 * 17} maw={16 * 20}>
              <Card
                shadow={''}
                radius={'md'}
                style={{
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6] + 33
                      : theme.colors.gray[0] + 33,
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
                    color={theme_name != THEME_NAME.rainbow ? '' : 'green'}
                    mr='md'
                  >
                    <Icon size={24} />
                  </ActionIcon>
                  <Box>
                    <Text size='xs' c={'dimmed'}>
                      {ele.platform}
                    </Text>
                    <Text>
                      <Anchor
                        href={ele.link}
                        color={theme_name != THEME_NAME.rainbow ? '' : 'green'}
                      >
                        {ele.text}
                      </Anchor>
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Contact;
