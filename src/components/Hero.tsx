import React from 'react';
import {
  Box,
  Flex,
  Text,
  Title,
  Image,
  Badge,
  Switch,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  Menu,
} from '@mantine/core';
import { IconMoonStars, IconPalette, IconSun } from '@tabler/icons';
import { IPersonalDetails } from '../types';
import { STAIN_VARIANT, THEME_NAME } from '../enum';
import { Stain } from './Stain';
// import { Stain } from './stain';

export const Hero = ({
  personalDetails,
}: {
  personalDetails: IPersonalDetails;
}) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const themeName: THEME_NAME = THEME_NAME.rainbow;
  // const swatches = (() => {
  //   const ignoreColors: string[] = ['dark', 'gray'];
  //   const colors: any = Object.keys(theme.colors).filter((color) => {
  //     return !ignoreColors.includes(color) && theme.colors[color][5];
  //   });
  //   return colors;
  // })();

  return (
    <Flex gap={16} direction='column' align={'center'} m={16 * 10}>
      <Flex
        gap={16 * 16}
        direction={'row'}
        align={'center'}
        // style={{ position: 'relative' }}
      >
        <Stain
          w={250}
          h={250}
          ml={96}
          mt={96}
          opacity={0.2}
          blur={16}
          radius={'50%'}
          transform={['0%', '0%']}
          color={themeName ? '' : 'yellow'}
          variant={STAIN_VARIANT.header}
        />
        <Box>
          <Text color='dimmed' size={'md'}>
            Namaskaram 🙏🏻
          </Text>
          <Title order={1}>
            {`I'm `}
            <Text
              variant='gradient'
              gradient={{
                from: themeName
                  ? theme.colors[theme.primaryColor][6]
                  : 'orange',
                to: themeName ? theme.colors[theme.primaryColor][4] : 'yellow',
                deg: 45,
              }}
              span
            >
              {personalDetails.name}
            </Text>
          </Title>
          <Badge
            size='xl'
            my={8}
            color={themeName ? '' : 'red'}
            variant='outline'
          >
            {personalDetails.profile}
          </Badge>
          <Flex
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            m={16}
            gap={16}
            align={'center'}
            justify={'center'}
          >
            {/* <Menu shadow='md' width={200}>
              <Menu.Target>
                <ActionIcon variant='transparent'>
                  <IconPalette />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Select theme</Menu.Label>
                <Menu.Item tt='capitalize' icon={<IconPalette size={14} />}>
                  Rainbow
                </Menu.Item>
                <Menu.Item tt='capitalize' icon={<IconPalette size={14} />}>
                  Steely
                </Menu.Item>
              </Menu.Dropdown>
            </Menu> */}

            <Switch
              checked={colorScheme === 'dark'}
              onChange={() => toggleColorScheme()}
              size='md'
              onLabel={
                <IconSun color={theme.colors.yellow[5]} size={16} stroke={2} />
              }
              offLabel={
                <IconMoonStars
                  color={theme.colors.blue[5]}
                  size={16}
                  stroke={2}
                />
              }
            />
          </Flex>
        </Box>
        <Box>
          <Image
            src={personalDetails.profileImage}
            opacity={0}
            alt='profile image'
            width={250}
            height={250}
            radius='lg'
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
