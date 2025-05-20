'use client';

import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import classes from './navbar.module.css';

import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function Navbar({ children }: Props) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const navlinks = [
    { label: 'Home', href: '/' },
    { label: 'Browse games', href: '/games' },
    { label: 'Create game', href: '/createGame' },
  ];

  return (
    <>
      <Box pb={80} >
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Text>Custom Wordle!</Text>

            <Group h="100%" gap={0} visibleFrom="sm">
              {navlinks.map((link, i) => (
                <a href={link.href} className={classes.link} key={i}>
                  {link.label}
                </a>
              ))}
            </Group>

            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? (
                  <IconSun size="1.1rem" />
                ) : (
                  <IconMoonStars size="1.1rem" />
                )}
              </ActionIcon>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />

            {navlinks.map((link, i) => (
              <a href={link.href} className={classes.link} key={i}>
                {link.label}
              </a>
            ))}

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? (
                  <IconSun size="1.1rem" />
                ) : (
                  <IconMoonStars size="1.1rem" />
                )}
              </ActionIcon>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      {children}
    </>
  );
}
