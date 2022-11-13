import { createStyles, Header, Autocomplete, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SwitchToggle from '../Switch-btn/Switch-btn';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, theme } = useStyles();


  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        {/* <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group> */}
        <Group>
          <SwitchToggle />
        </Group>
      </div>
    </Header>
  );
}