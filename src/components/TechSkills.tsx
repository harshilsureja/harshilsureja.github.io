// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const TechSkills = ({ techSkills }: any) => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Tech skills
      </Title>
      <Flex gap={16}>
        {/* {techSkills.map((ele: string) => (
          <Badge size='lg' key={ele}>
            {ele}
          </Badge>
        ))} */}
      </Flex>
    </Box>
  );
};

export default TechSkills;
