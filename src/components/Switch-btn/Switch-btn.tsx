import { Switch, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { FC } from 'react';
import { useRoot } from '../../hooks/useRoot';

const SwitchToggle: FC<any> = () => {
  const {toogle, themeType, theme} = useRoot();

  return (
    <>
      <Group position="center" my={30}>
        <Switch
          checked={themeType === 'dark'}
          onChange={toogle}
          size="lg"
          onLabel={<IconSun color={theme.palette.primary.contrastText} size={20} stroke={1.5} />}
          offLabel={<IconMoonStars color={theme.palette.primary.contrastText} size={20} stroke={1.5} />}
        />
      </Group>
    </>
  );
}

export default SwitchToggle;