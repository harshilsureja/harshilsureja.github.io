import React from 'react';
import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Center,
  Container,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { Stain } from './Stain';
import { IContact } from '../types';
import { contactList } from '../types/contact';
import { STAIN_VARIANT } from '../enum';

export const Contact = ({ contactDetails }: { contactDetails: IContact[] }) => {
  return (
    <Container>
      <Stain
        w={250}
        h={150}
        opacity={0.5}
        blur={16}
        ml={{ base: '0', sm: '448px' }}
        mt={{ base: '0', sm: '80px' }}
        radius={'50%'}
        color={'green'}
        variant={STAIN_VARIANT.contact}
      />
      <Center>
        <Title order={3} mb={'md'}>
          Contact
        </Title>
      </Center>
      <Group justify={'center'}>
        {contactDetails.map((ele: IContact, i: number) => {
          const Icon = contactList[ele.platform];
          return (
            <Box key={i} miw={16 * 17} maw={16 * 20}>
              <Card
                radius={'md'}
                style={{
                  backgroundColor: `light-dark(
                    rgba(var(--mantine-color-gray-0),0.2),
                    rgba(var(--mantine-color-dark-6),0.2)
                  )`,
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255,0.3)',
                }}
              >
                <Group>
                  <ActionIcon
                    size={'xl'}
                    radius='md'
                    variant='light'
                    color={'green'}
                  >
                    <Icon size={24} />
                  </ActionIcon>
                  <Box>
                    <Text size='xs' c={'dimmed'}>
                      {ele.platform}
                    </Text>
                    <Text>
                      <Anchor href={ele.link} c={'green'}>
                        {ele.text}
                      </Anchor>
                    </Text>
                  </Box>
                </Group>
              </Card>
            </Box>
          );
        })}
      </Group>
    </Container>
  );
};

export default Contact;
