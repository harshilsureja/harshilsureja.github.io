// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const Languages = ({ languages }: { languages: string[] }) => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Languages
      </Title>
      <Flex gap={16}>
        {languages.map((ele: string) => (
          <Badge size='lg' key={ele}>
            {ele}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};

export default Languages;
