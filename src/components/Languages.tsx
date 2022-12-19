// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const Languages = () => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Languages
      </Title>
      <Flex gap={16}>
        <Badge size='lg'>Language 1</Badge>
        <Badge size='lg'>Language 2</Badge>
        <Badge size='lg'>Language 3</Badge>
      </Flex>
    </Box>
  );
};

export default Languages;
