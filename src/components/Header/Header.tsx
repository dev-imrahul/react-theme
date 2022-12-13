import { 
  createStyles, Header, HoverCard, Group, Button, UnstyledButton, ThemeIcon, Anchor, Divider, Center, Box,
  Burger, Drawer, Collapse, ScrollArea, Grid, Container, Input, Text, SimpleGrid, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconSearch, IconLogin, IconDeviceMobile, IconWoman, IconMan, IconUserSearch, IconStack, IconArtboard, IconShoppingCart } from '@tabler/icons';
import { Logo } from 'assets';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  borderNone: {
    border: 'none'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.fn.primaryColor(),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.fn.primaryColor(),
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.fn.primaryColor(),
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconDeviceMobile,
    title: 'Mobile',
    description: 'Lorem Ipsum is simply the printing and typesetting industry.',
  },
  {
    icon: IconMan,
    title: 'Mens Fashion',
    description: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
  },
  {
    icon: IconWoman,
    title: 'Womens Fashion',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
  },
  {
    icon: IconUserSearch,
    title: 'Babys fashion',
    description: 'Lorem Ipsum is simply dummy text of the and typesetting industry.',
  },
  {
    icon: IconStack,
    title: 'Appliances',
    description: 'Lorem Ipsum is simply of the printing and typesetting industry.',
  },
  {
    icon: IconArtboard,
    title: 'Electronics',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const matchMedia = useMediaQuery('767px')


  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="xl">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
console.log(matchMedia)
  return (
    <Box pb={120}>
      <Container size="xl">
        <Grid>
          <Grid.Col>
            <Header height={65} px="md" className={ classes.borderNone }>
              <Group position="apart" sx={{ height: '100%' }}>
                <Group>
                  <img src={Logo} width={50} alt="" onClick={() => navigate('/')} />
                  <Input
                    rightSection={<IconSearch  color={theme.fn.primaryColor()} />}
                    placeholder="Seach product"
                    radius="lg"
                    sx={!matchMedia ? {width: '200px'}  :{ width: '300px' }}
                  />

                </Group>
                <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                  <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                    <HoverCard.Target>
                      <a href="#" className={classes.link}>
                        <Center inline>
                          <Box component="span" mr={5}>
                            Categories
                          </Box>
                          <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                        </Center>
                      </a>
                    </HoverCard.Target>
                    <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                      <Group position="apart" px="md">
                        <Text weight={500}>Categories</Text>
                        <Anchor href="#" size="xs">
                          View all
                        </Anchor>
                      </Group>

                      <Divider
                        my="sm"
                        mx="-md"
                        color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                      />

                      <SimpleGrid cols={2} spacing={0}>
                        {links}
                      </SimpleGrid>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <a href="#" className={classes.link}>
                    Offers
                  </a>
                  <a href="#" className={classes.link}>
                    Become a seller
                  </a>
                  <Button variant="filled" mx={10} leftIcon={<IconShoppingCart />} onClick={() => navigate('/login')}>Cart</Button>
                  <Button variant="outline" leftIcon={<IconLogin />} onClick={() => navigate('/login')}>Log in</Button>
                </Group>

                <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
              </Group>
            </Header>

          </Grid.Col>
        </Grid>
      </Container>
      <Divider mb="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<img src={Logo} width={'35px'} alt=""  onClick={() => navigate('/')} />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Categories
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Offers
          </a>
          <a href="#" className={classes.link}>
            Become a seller
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="filled" mr={10} leftIcon={<IconShoppingCart />} onClick={() => navigate('/login')}>Cart</Button>
            <Button variant="outline" leftIcon={<IconLogin />} onClick={() => navigate('/login')}>Log in</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}