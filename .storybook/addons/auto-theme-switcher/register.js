import { addons } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming/create';

// Automatically switch light/dark theme based on system preference.
addons.register('auto-theme-switcher', (api) => {
  const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  let currentMatch = prefersDarkQuery.matches;

  setTheme(api, currentMatch);

  prefersDarkQuery.addEventListener('change', (event) => {
    const nextMatch = event.matches;

    if (currentMatch !== nextMatch) {
      currentMatch = nextMatch;
      setTheme(api, currentMatch);
    }
  });
});

function setTheme(api, prefersDark) {
  const colorScheme = prefersDark ? 'dark' : 'light';
  const theme = create({
    base: colorScheme,
    brandTitle: '🎋 Bamboo UI',
    brandUrl: 'https://github.com/connor-baer/bamboo-ui',
  });

  api.setOptions({ theme });
  addons.getChannel().emit(FORCE_RE_RENDER);

  addParameters({ docs: { theme } });
}
