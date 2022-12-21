import React from 'react';
import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Flex,
  Grid,
  Text,
  Title,
} from '@mantine/core';
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from '@tabler/icons';
import { Stain } from './Stain';

const contactList = {
  Phone: IconPhone,
  Email: IconMail,
  LinkedIn: IconBrandLinkedin,
  WhatsApp: IconBrandWhatsapp,
  Telegram: IconBrandTelegram,
};

interface IContactDetail {
  platform: keyof typeof contactList;
  text: string;
  link: string;
}

export const Contact = ({
  contactDetails,
}: {
  contactDetails: IContactDetail[];
}) => {
  return (
    <Flex
      gap={16}
      direction='column'
      align={'center'}
      style={{ position: 'relative' }}
    >
      <Stain
        w={200}
        h={150}
        opacity={1}
        blur={16}
        radius={'50%'}
        transform={['30%', '50%']}
        variant={'backgroundBlue'}
      />
      <Title order={3} weight={100}>
        Contact
      </Title>
      <Grid justify={'center'} align={'center'} gutter={16}>
        {contactDetails.map((ele: IContactDetail, i: number) => {
          const Icon = contactList[ele.platform];
          return (
            <Grid.Col key={i} w={16 * 11} span={4}>
              <Card
                shadow={''}
                radius={'md'}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Flex>
                  <ActionIcon
                    size={'xl'}
                    radius='md'
                    variant='light'
                    color=''
                    mr='md'
                  >
                    <Icon size={24} />
                  </ActionIcon>
                  <Box>
                    <Text size='xs' c={'dimmed'}>
                      {ele.platform}
                    </Text>
                    <Text>
                      <Anchor href={ele.link}>{ele.text}</Anchor>
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Contact;

// import {
//   createStyles,
//   Title,
//   Container,
//   Text,
//   UnstyledButton,
//   Overlay,
//   SimpleGrid,
// } from '@mantine/core';

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     paddingTop: theme.spacing.md,
//     paddingBottom: theme.spacing.xl * 2,
//   },

//   header: {
//     height: 400,
//     boxSizing: 'border-box',
//     backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
//       theme.colors[theme.primaryColor][6]
//     } 100%)`,
//     backgroundSize: 'cover',
//     display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'space-between',
//     position: 'relative',
//     padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
//     borderRadius: theme.radius.lg,
//     marginBottom: theme.spacing.lg,

//     '@media (max-width: 1080px)': {
//       height: 'auto',
//       flexDirection: 'column-reverse',
//       alignItems: 'initial',
//       padding: theme.spacing.xl,
//     },
//   },

//   title: {
//     color: theme.white,
//     position: 'relative',
//     zIndex: 1,
//     fontSize: 46,
//     fontWeight: 800,
//     letterSpacing: -0.5,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,

//     '@media (max-width: 1080px)': {
//       fontSize: 22,
//       textAlign: 'center',
//       marginTop: theme.spacing.xl,
//     },
//   },

//   titleOverlay: {
//     zIndex: 0,
//     position: 'absolute',
//     color: theme.white,
//     fontWeight: 900,
//     opacity: 0.1,
//     fontSize: 320,
//     lineHeight: 1,
//     top: 10,
//     left: 32,
//     pointerEvents: 'none',
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,

//     '@media (max-width: 1080px)': {
//       display: 'none',
//     },
//   },

//   contact: {
//     padding: `${theme.spacing.xl * 1.5}px`,
//     backgroundColor: theme.white,
//     borderRadius: theme.radius.lg,
//     boxShadow: theme.shadows.md,

//     '@media (max-width: 1080px)': {
//       padding: `${theme.spacing.xl}px`,
//     },
//   },

//   contactTitle: {
//     color: theme.black,
//     marginBottom: theme.spacing.xl,
//     lineHeight: 1,
//   },

//   categoryCard: {
//     height: 160,
//     position: 'relative',
//     backgroundSize: '100%',
//     backgroundPosition: 'center',
//     color: theme.white,
//     borderRadius: theme.radius.lg,
//     padding: theme.spacing.xl,
//     overflow: 'hidden',
//     transition: 'background-size 300ms ease',

//     '&:hover': {
//       backgroundSize: '105%',
//     },
//   },

//   categoryLabel: {
//     color: theme.white,
//     zIndex: 2,
//     position: 'relative',
//   },
// }));

// export function FaqWithHeader() {
//   const { classes } = useStyles();
//   return (
//     <Container className={classes.wrapper} size="lg">
//       <div className={classes.header}>
//         <Title className={classes.title}>Contact</Title>
//         <Title className={classes.titleOverlay} role="presentation">
//           @
//         </Title>

//         <div className={classes.contact}>
//           {/* <Text size="xl" weight={500} className={classes.contactTitle}>
//             Contact
//           </Text> */}

//           <ContactIconsList />
//         </div>
//       </div>
//     </Container>
//   );
// }

// import {  ThemeIcon } from '@mantine/core';
// import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons';

// type ContactIconVariant = 'white' | 'gradient';

// interface ContactIconStyles {
//   variant: ContactIconVariant;
// }

// const useStyles1 = createStyles((theme, { variant }: ContactIconStyles) => ({
//   wrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     color: theme.white,
//   },

//   icon: {
//     marginRight: theme.spacing.md,
//     backgroundImage:
//       variant === 'gradient'
//         ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
//             theme.colors[theme.primaryColor][6]
//           } 100%)`
//         : 'none',
//     backgroundColor: 'transparent',
//   },

//   title: {
//     color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
//   },

//   description: {
//     color: variant === 'gradient' ? theme.black : theme.white,
//   },
// }));

// interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
//   icon: React.FC<any>;
//   title: React.ReactNode;
//   description: React.ReactNode;
//   variant?: ContactIconVariant;
// }

// function ContactIcon({
//   icon: Icon,
//   title,
//   description,
//   variant = 'gradient',
//   className,
//   ...others
// }: ContactIconProps) {
//   const { classes, cx } = useStyles1({ variant });
//   return (
//     <div className={cx(classes.wrapper, className)} {...others}>
//       {variant === 'gradient' ? (
//         <ThemeIcon size={40} radius="md" className={classes.icon}>
//           <Icon size={24} />
//         </ThemeIcon>
//       ) : (
//         <Box mr="md">
//           <Icon size={24} />
//         </Box>
//       )}

//       <div>
//         <Text size="xs" className={classes.title}>
//           {title}
//         </Text>
//         <Text className={classes.description}>{description}</Text>
//       </div>
//     </div>
//   );
// }

// interface ContactIconsListProps {
//   data?: ContactIconProps[];
//   variant?: ContactIconVariant;
// }

// const MOCKDATA = [
//   { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
//   { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
//   { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
//   { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
// ];

// export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
//   const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
//   return <Stack>{items}</Stack>;
// }
