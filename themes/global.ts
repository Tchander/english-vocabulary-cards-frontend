import { lightButtonTheme } from '@/themes/components';
import type { GlobalThemeOverrides } from 'naive-ui';

export const lightGlobalTheme = {
  common: {
    fontWeight: '500',
    fontWeightStrong: '600',
  },
  Button: lightButtonTheme,
} satisfies GlobalThemeOverrides;
