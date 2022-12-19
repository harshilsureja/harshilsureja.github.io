// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const OtherSkills = () => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Other skills
      </Title>
      <Flex gap={16}>
        <Badge size='lg'>Skill 1</Badge>
        <Badge size='lg'>Skill 2</Badge>
        <Badge size='lg'>Skill 3</Badge>
      </Flex>
    </Box>
  );
};

export default OtherSkills;
