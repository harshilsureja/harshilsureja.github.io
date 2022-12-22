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
// import { Stain } from './stain';

export const Hero = ({ personalDetails }: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  // const swatches = (() => {
  //   const ignoreColors: string[] = ['dark', 'gray'];
  //   const colors: any = Object.keys(theme.colors).filter((color) => {
  //     return !ignoreColors.includes(color) && theme.colors[color][5];
  //   });
  //   return colors;
  // })();

  return (
    <Flex gap={16} direction='column' align={'center'} m={16 * 10}>
      {/* <Title order={3} weight={100}>
        Home
      </Title> */}
      <Flex
        gap={16 * 16}
        direction={'row'}
        align={'center'}
        // style={{ position: 'relative' }}
      >
        <Box>
          <Text color='dimmed' size={'md'}>
            Namaskaram 🙏🏻
          </Text>
          <Title order={1}>
            {`I'm `}
            <Text
              variant='gradient'
              gradient={{
                from: theme.colors[theme.primaryColor][6],
                to: theme.colors[theme.primaryColor][4],
                deg: 45,
              }}
              span
            >
              {personalDetails.name}
            </Text>
          </Title>
          <Badge size='xl' my={8}>
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
                {swatches.map((colorName: any) => {
                  console.log(colorName);
                  return (
                    <Menu.Item
                      key={colorName}
                      tt='capitalize'
                      icon={<IconPalette size={14} />}
                    >
                      {colorName}
                    </Menu.Item>
                  );
                })}
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
            opacity={0.1}
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
