import React from 'react';
import { Box, Flex, Text, Title, Image, Badge } from '@mantine/core';

export const Hero = ({ personalDetails }: any) => {
  console.log(personalDetails);
  return (
    <Flex gap={16} direction='column' align={'center'} m={16 * 10}>
      {/* <Title order={3} weight={100}>
        Home
      </Title> */}
      <Flex gap={16 * 16} direction={'row'} align={'center'}>
        <Box>
          <Text color='dimmed' size={'md'}>
            Namaskaram 🙏🏻
          </Text>
          <Title order={1}>
            {`I'm`} {personalDetails.name}
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
