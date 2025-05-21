'use client';

import { Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

export interface GameItemProps {
  onClick?: () => void;
}

export function GameItem(props: GameItemProps) {
  return (
    <Paper style={{ cursor: 'pointer' }} onClick={() => console.log('CLick')}>
      <Group grow align="flex-start">
        <Image
          mah={150}
          maw={100}
          src={
            'https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
          }
        />
        <Stack py="md" gap="sm">
          <Title order={4}>Jakieś samochody</Title>
          <Text truncate="end" lineClamp={5}>
            Ttuaj chodzi o zgadywanie, wiesz, coś tam sugerujesz i zgadujesz
            albo nie
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}

export default GameItem;
