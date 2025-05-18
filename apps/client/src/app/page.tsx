import { createTheme } from '@mantine/core';
import { Navbar } from '@custom-wordle/ui-system';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Index() {
  return (
    <>
      <Navbar />
    </>
  );
}
