import { GameItem } from '@custom-wordle/ui-system';
import {
  Card,
  Container,
  Grid,
  Stack,
  Title,
  Paper,
  TextInput,
  Group,
  SimpleGrid,
  Box,
  ActionIcon,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function GamesPage() {

  

  return (
    <Container>
      <Stack gap="md">
        <Box /* style={{border: "1px solid gray"}}*/ p="xs">
          <Stack align="center">
            <Title order={2} style={{ textAlign: 'center' }}>
              Browse games
            </Title>
            <Group>
              <TextInput
                placeholder="AAA"
                rightSection={
                  <ActionIcon variant='subtle'>
                    <IconSearch />
                  </ActionIcon>
                }
              />
            </Group>
          </Stack>
        </Box>

        <SimpleGrid cols={2}>
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
