import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from '../store/reducers/slice/theme';

export const Hero = ({
  personalDetails,
}: {
  personalDetails: IPersonalDetails;
}) => {
  const dispatch: any = useDispatch();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { theme_name } = useSelector((state: any) => state.themeReducer);
  useEffect(() => {}, [theme_name]);

  const onThemeHandle = (themeNo: THEME_NAME) => {
    dispatch(updateTheme(themeNo));
  };

  return (
    <Flex
      align={'center'}
      justify={'space-around'}
      h={{ base: '70vh', sm: '60vh' }}
      w={{ base: '100vw', sm: '50vw' }}
      direction={{ base: 'column', sm: 'row' }}
      mt={{ base: 16 * 4, sm: 0 }}
      gap={'lg'}
    >
      <Box>
        <Stain
          w={250}
          h={250}
          ml={{ base: '0', sm: '8%' }}
          opacity={0.2}
          blur={16}
          radius={'50%'}
          color={theme_name != THEME_NAME.rainbow ? '' : 'yellow'}
          variant={STAIN_VARIANT.header}
        />
        <Text color='dimmed' size={'md'}>
          Namaskaram 🙏🏻
        </Text>
        <Title order={1}>
          {`I'm `}
          <Text
            variant='gradient'
            gradient={{
              from:
                theme_name != THEME_NAME.rainbow
                  ? theme.colors[theme.primaryColor][6]
                  : 'orange',
              to:
                theme_name != THEME_NAME.rainbow
                  ? theme.colors[theme.primaryColor][4]
                  : 'yellow',
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
          color={theme_name != THEME_NAME.rainbow ? '' : 'red'}
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
          <Menu shadow='md' width={200}>
            <Menu.Target>
              <ActionIcon variant='transparent'>
                <IconPalette />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Select theme</Menu.Label>
              <Menu.Item
                tt='capitalize'
                icon={<IconPalette size={14} />}
                onClick={() => onThemeHandle(1)}
              >
                Rainbow
              </Menu.Item>
              <Menu.Item
                tt='capitalize'
                icon={<IconPalette size={14} />}
                onClick={() => onThemeHandle(2)}
              >
                Steely
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Switch
            checked={colorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
            color={theme_name != THEME_NAME.rainbow ? '' : 'gray'}
            size='lg'
            onLabel={
              <IconSun color={theme.colors.yellow[5]} size={20} stroke={2} />
            }
            offLabel={
              <IconMoonStars
                color={theme.colors.blue[5]}
                size={20}
                stroke={2}
              />
            }
          />
        </Flex>
      </Box>
      <Box>
        <Image
          src={personalDetails.profileImage}
          opacity={1}
          alt='profile image'
          width={250}
          height={250}
          radius='lg'
        />
      </Box>
    </Flex>
  );
};

export default Hero;
