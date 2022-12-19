// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const TechSkills = () => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Tech skills
      </Title>
      <Flex gap={16}>
        <Badge size='lg'>Tech skill 1</Badge>
        <Badge size='lg'>Tech skill 2</Badge>
        <Badge size='lg'>Tech skill 3</Badge>
      </Flex>
    </Box>
  );
};

export default TechSkills;
