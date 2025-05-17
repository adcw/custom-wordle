import { Button, createTheme, MantineProvider } from '@mantine/core';


const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Index() {
  return <MantineProvider theme={theme} >
     <Button>ADCW</Button>
  </MantineProvider>
}
