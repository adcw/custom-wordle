// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import classes from './layout.module.css';

import {
  ColorSchemeScript,
  Container,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import { Navbar } from '@custom-wordle/ui-system';

export const metadata = {
  title: 'Custom Wordle!',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={classes.body}>
        <MantineProvider>
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  );
}
