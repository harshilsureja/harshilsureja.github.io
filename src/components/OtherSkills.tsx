import React from 'react';
import { Badge, Center, Container, Group, Title } from '@mantine/core';
import { IOtherSkill } from '../types';

export const OtherSkills = ({ otherSkills }: { otherSkills: IOtherSkill }) => {
  return (
    <Container>
      <Center>
        <Title order={3} mb={'sm'}>
          Other skills
        </Title>
      </Center>
      <Center>
        <Title order={6} c='dimmed' mb={'md'}>
          Cloud
        </Title>
      </Center>
      <Group justify='center'>
        {otherSkills.cloud.map((ele: string) => (
          <Badge color={'cyan'} size='lg' variant='light' key={ele}>
            {ele}
          </Badge>
        ))}
      </Group>
    </Container>
  );
};

export default OtherSkills;
