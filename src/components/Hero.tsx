import React, { useEffect } from 'react';
import {
  Box,
  Text,
  Title,
  Image,
  Badge,
  Switch,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  Menu,
  Group,
} from '@mantine/core';
import { IconMoonStars, IconPalette, IconSun } from '@tabler/icons-react';
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
    <>
      {' '}
      <Group justify='end' align='center'>
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
              leftSection={<IconPalette color='gray' />}
              onClick={() => onThemeHandle(1)}
            >
              Rainbow
            </Menu.Item>
            <Menu.Item
              tt='capitalize'
              leftSection={<IconPalette color='gray' />}
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
              // size={20}
              stroke={2}
            />
          }
        />
      </Group>
      <Group
        align={'center'}
        justify={'center'}
        mt={{ base: 16 * 4, sm: 0 }}
        gap={'112px'}
      >
        <Group>
          <Stain
            w={250}
            h={250}
            ml={{ base: '0', sm: '128px' }}
            mt={{ base: '0', sm: '96px' }}
            opacity={0.2}
            blur={16}
            radius={'50%'}
            color={theme_name != THEME_NAME.rainbow ? '' : 'yellow'}
            variant={STAIN_VARIANT.header}
          />
          <Box>
            <Text c='dimmed' size={'md'}>
              Namaskaram 🙏🏻
            </Text>
            <Title order={1}>
              {`I'm `}
              <Text
                inherit
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
          </Box>
        </Group>
        <Box>
          <Image
            src={personalDetails.profileImage}
            opacity={1}
            alt='profile image'
            width={200}
            height={200}
            radius='lg'
          />
        </Box>
      </Group>
    </>
  );
};

export default Hero;
