import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import theme, { ButtonsSize } from '../../theme';
import Icon, { IconType } from '../../dataDisplay/Icon';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: any;
  iconType?: keyof IconType;
  size: keyof ButtonsSize;
  color: 'primary' | 'secondary' | 'error';
  variant?: 'outlined' | 'contained';
}

const Button = ({
  children,
  iconType,
  size,
  color,
  variant,
  ...rest
}: Props) => {
  const BootstrapButton = withStyles({
    root: {
      height: theme.buttons.size[size].height,
      padding: theme.buttons.size[size].padding,
      fontFamily: theme.fonts.fontFamily,
      color: variant === 'contained' ? theme.colors.white : theme.colors[color],
      'text-transform': 'capitalize',
      'background-color':
        variant === 'contained' ? theme.colors[color] : theme.colors.white,
      'border-color': theme.colors[color],

      '&:hover': {
        'border-color': theme.colors[color],
        'background-color':
          variant === 'contained'
            ? theme.colors[`${color}Hover`]
            : theme.colors.white
      },

      '&:disabled': {
        opacity: theme.colors.disabled.opacity,
        color:
          variant === 'contained' ? theme.colors.white : theme.colors[color]
      }
    }
  })(ButtonMUI);

  return (
    <BootstrapButton {...rest}>
      {iconType && <Icon size="md" color="white" type={iconType} />}
      {children}
    </BootstrapButton>
  );
};

export default Button;
