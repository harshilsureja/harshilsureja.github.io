import React from 'react';
import { Box, Flex, Text, Title, Image, Badge } from '@mantine/core';
// import { Stain } from './stain';

export const Hero = ({ personalDetails }: any) => {
  console.log(personalDetails);
  return (
    <Flex gap={16} direction='column' align={'center'} m={16 * 10}>
      {/* <Title order={3} weight={100}>
        Home
      </Title> */}
      <Flex
        gap={16 * 16}
        direction={'row'}
        align={'center'}
        style={{ position: 'relative' }}
      >
        <Box>
          <Text color='dimmed' size={'md'}>
            Namaskaram 🙏🏻
          </Text>
          <Title order={1}>
            {`I'm `}
            <Text
              variant='gradient'
              gradient={{ from: 'orange', to: 'yellow', deg: 45 }}
              span
            >
              {personalDetails.name}
            </Text>
          </Title>
          <Badge size='xl' my={8}>
            {personalDetails.profile}
          </Badge>
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
