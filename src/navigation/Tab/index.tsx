import React, { ReactElement } from 'react';
import TabMui, { TabProps } from '@material-ui/core/Tab';
import TabsMui, { TabsProps } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import theme from '../../theme';
import { IconType } from '../../dataDisplay/Icon';
import IconText from '../../dataDisplay/IconText';
import Text from '../../dataDisplay/Text';

export type Item = {
  id: string;
  icon?: keyof IconType;
  label: string;
  customLabel?: ReactElement;
  disabled?: boolean;
};

type Props = {
  onChange: (selectedIndex: string) => void;
  items: Array<Item>;
  selectedTab: string;
  variant?: 'outlined' | 'contained';
};

const TabWrapper = styled.div<{ variantStyle: string }>`
  border-bottom: ${({ variantStyle }) =>
    variantStyle === 'outlined'
      ? '1px solid ' + theme.colors.overlay.color
      : 'none'};
`;

interface CustomTabsProps extends TabsProps {
  variantStyle: string;
  children: any;
}
const CustomTabs = ({ variantStyle, ...rest }: CustomTabsProps): any => {
  const CustomTabsMui = withStyles({
    root: {
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : theme.colors.white,
      borderRadius: variantStyle === 'contained' ? '8px 8px 0 0' : 'inherit',

      '& .MuiTabs-indicator': {
        backgroundColor: variantStyle === 'outlined' ? '#008C73' : 'transparent'
      },
      '& .MuiTab-wrapper svg': {
        marginTop: '4px'
      },
      '& .MuiTab-root.Mui-selected': {
        backgroundColor:
          variantStyle === 'contained'
            ? theme.colors.inputField
            : theme.colors.white
      },
      '& .MuiTab-textColorInherit.Mui-selected p': {
        color: '#008C73',
        fontWeight: '700'
      },
      '& .MuiTabs-root.MuiTabs-vertical p': {
        textAlign: 'left'
      }
    }
  })(TabsMui);

  return <CustomTabsMui {...rest} />;
};

interface CustomTabProps extends TabProps {
  variantStyle: string;
}

const CustomTab = ({ variantStyle, ...rest }: CustomTabProps): any => {
  const CustomTabMui = withStyles({
    root: {
      fontFamily: theme.fonts.fontFamily,
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : 'inherit',
      border:
        variantStyle === 'contained'
          ? '1px solid rgb(232, 231, 230)'
          : 'inherit',
      '& .MuiTabs-indicator': {
        backgroundColor: variantStyle === 'contained' ? 'none' : 'inherit'
      },
      textTransform: variantStyle === 'contained' ? 'capitalize' : 'uppercase'
    }
  })(TabMui);

  return <CustomTabMui {...rest} />;
};

function Tab({ onChange, items, selectedTab, variant = 'outlined' }: Props) {
  const handleChange = (_event: React.ChangeEvent<{}>, value: any) => {
    onChange(value);
  };

  const getLabel = (item: Item) => {
    if (item.customLabel) {
      return item.customLabel;
    }

    if (item.icon) {
      return (
        <IconText
          iconSize="sm"
          iconType={item!.icon}
          textSize="sm"
          color={selectedTab === item.id ? 'primary' : 'text'}
          text={item.label}
        />
      );
    }

    return (
      <Text color="text" size="sm">
        {item.label}{' '}
      </Text>
    );
  };

  return (
    <TabWrapper variantStyle={variant}>
      <CustomTabs
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange as any}
        variantStyle={variant}>
        {items.map((item) => (
          <CustomTab
            key={item.id}
            label={getLabel(item)}
            value={item.id}
            disabled={item.disabled}
            variantStyle={variant}
          />
        ))}
      </CustomTabs>
    </TabWrapper>
  );
}

export default Tab;