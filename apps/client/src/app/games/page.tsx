import {
  Card,
  Container,
  Grid,
  Stack,
  Title,
  Paper,
  TextInput,
  Group,
} from '@mantine/core';

export default function GamesPage() {
  return (
    <Container>
      <Stack gap="md">
        <Paper>
          <Group align="center">
            <Title order={2} style={{ textAlign: 'center' }}>
              Browse games
            </Title>
          </Group>
          <TextInput placeholder="AAA" />
        </Paper>

        <Paper>aa</Paper>
        <Paper>aa</Paper>
      </Stack>
    </Container>
  );
}
