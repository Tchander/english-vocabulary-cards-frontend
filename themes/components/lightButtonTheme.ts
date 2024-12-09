import paddings from '@/assets/scss/modules/paddings.module.scss';
import margins from '@/assets/scss/modules/margins.module.scss';
import borderRadius from '@/assets/scss/modules/borderRadius.module.scss';
import colors from '@/assets/scss/modules/colors.module.scss';
import type { ButtonProps } from 'naive-ui';

const getDisabledButton = (buttonType = '') => {
  return {
    // background
    [`colorDisabled${buttonType}`]: colors.bgContainerDisabled,
    // border
    [`borderDisabled${buttonType}`]: `1px solid ${colors.border}`,
    // text
    [`textColorDisabled${buttonType}`]: colors.textDisabled,
    // ghost (prop)
    [`textColorGhostDisabled${buttonType}`]: colors.textDisabled,
    // text (prop)
    [`textColorTextDisabled${buttonType}`]: colors.textDisabled,
  };
};

export const lightButtonTheme: NonNullable<ButtonProps['themeOverrides']> = {
  // Small
  paddingSmall: `0 ${paddings.xs}`,
  fontSizeSmall: '12px',
  borderRadiusSmall: borderRadius.sm,
  iconSizeSmall: '14px',
  iconMarginSmall: margins.xs,
  paddingRoundSmall: paddings.base,

  // Medium
  fontSizeMedium: '14px',
  fontWeight: '400',
  fontWeightStrong: '600',
  heightMedium: '32px',
  paddingMedium: `0 ${paddings.base}`,
  borderRadiusMedium: borderRadius.base,
  iconSizeMedium: '16px',
  iconMarginMedium: margins.xs,
  paddingRoundMedium: paddings.base,

  // Large
  paddingLarge: `0 ${paddings.base}`,
  fontSizeLarge: '16px',
  borderRadiusLarge: borderRadius.lg,
  iconSizeLarge: '18px',
  iconMarginLarge: margins.xs,
  paddingRoundLarge: paddings.base,

  /// Default
  border: `1px solid ${colors.border}`,
  borderHover: `1px solid ${colors.border}`,
  borderPressed: `1px solid ${colors.brandOrangeActive}`,
  borderFocus: `1px solid ${colors.border}`,

  // background
  color: colors.bgContainer,
  colorHover: colors.bgContainer,
  colorPressed: colors.bgContainer,
  colorFocus: colors.bgContainer,

  // text
  textColor: colors.text,
  textColorHover: colors.brandOrangeHover,
  textColorPressed: colors.brandOrangeActive,
  textColorFocus: colors.brandOrangeHover,

  // ghost (prop)
  textColorGhost: colors.bgContainer,
  textColorGhostHover: colors.brandOrangeHover,
  textColorGhostPressed: colors.brandOrangeActive,
  textColorGhostFocus: colors.brandOrangeHover,

  // text (prop)
  textColorText: colors.text,
  textColorTextHover: colors.brandOrangeHover,
  textColorTextPressed: colors.brandOrangeActive,
  textColorTextFocus: colors.brandOrangeHover,

  ...getDisabledButton(),
  /// ____

  /// Primary
  borderPrimary: `1px solid ${colors.brandOrange}`,
  borderHoverPrimary: `1px solid ${colors.brandOrangeHover}`,
  borderPressedPrimary: `1px solid ${colors.brandOrangeActive}`,
  borderFocusPrimary: `1px solid ${colors.brandOrangeHover}`,

  // background
  colorPrimary: colors.brandOrange,
  colorHoverPrimary: colors.brandOrangeHover,
  colorPressedPrimary: colors.brandOrangeActive,
  colorFocusPrimary: colors.brandOrangeHover,

  // text
  textColorPrimary: colors.textLightSolid,
  textColorHoverPrimary: colors.textLightSolid,
  textColorPressedPrimary: colors.textLightSolid,
  textColorFocusPrimary: colors.textLightSolid,

  // ghost (prop)
  textColorGhostPrimary: colors.brandOrange,
  textColorGhostHoverPrimary: colors.brandOrangeHover,
  textColorGhostPressedPrimary: colors.brandOrangeActive,
  textColorGhostFocusPrimary: colors.brandOrangeHover,

  // text (prop)
  textColorTextPrimary: colors.text,
  textColorTextPressedPrimary: colors.text,
  textColorTextHoverPrimary: colors.text,
  textColorTextFocusPrimary: colors.text,

  ...getDisabledButton('Primary'),
  /// ____

  /// Error
  borderError: `1px solid ${colors.errorBase}`,
  borderHoverError: `1px solid ${colors.errorHover}`,
  borderFocusError: `1px solid ${colors.errorHover}`,
  borderPressedError: `1px solid ${colors.errorActive}`,

  // background
  colorError: colors.errorBase,
  colorHoverError: colors.errorHover,
  colorFocusError: colors.errorHover,
  colorPressedError: colors.errorActive,

  // text
  textColorError: colors.textLightSolid,
  textColorHoverError: colors.textLightSolid,
  textColorPressedError: colors.textLightSolid,
  textColorFocusError: colors.textLightSolid,

  // ghost (prop)
  textColorGhostError: colors.errorBase,
  textColorGhostHoverError: colors.errorHover,
  textColorGhostFocusError: colors.errorHover,
  textColorGhostPressedError: colors.errorActive,

  // text (prop)
  textColorTextError: colors.errorBase,
  textColorTextPressedError: colors.errorBase,
  textColorTextHoverError: colors.errorBase,

  ...getDisabledButton('Error'),
  /// ____

  opacityDisabled: '1',
  waveOpacity: '0',
};
