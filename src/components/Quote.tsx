// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Blockquote, Box, Flex } from '@mantine/core';

export const Quote = () => {
  return (
    <Blockquote cite='— Harshil Sureja'>
      {"Problem doesn't exist without solution."}
    </Blockquote>
  );
};

export default Quote;
