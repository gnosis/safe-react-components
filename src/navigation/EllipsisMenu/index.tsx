import { ClickAwayListener, Divider } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import styled from 'styled-components';

import { FixedIcon } from '../..';

const MenuWrapper = styled.div`
  display: flex;
`;

const MenuItemWrapper = styled.div`
  :focus {
    outline-color: transparent;
  }
`;

const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  outline-color: transparent;
  height: 24px;
  width: 24px;

  span {
    display: flex;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.inputField};
  }
`;

export type EllipsisMenuItem = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

type Props = {
  menuItems: EllipsisMenuItem[];
};

const EllipsisMenu = ({ menuItems }: Props): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const onMenuItemClick = (i: EllipsisMenuItem) => {
    i.onClick();
    closeMenuHandler();
  };

  return (
    <ClickAwayListener onClickAway={closeMenuHandler}>
      <MenuWrapper>
        <IconWrapper onClick={handleClick}>
          <FixedIcon type="options" />
        </IconWrapper>
        <Menu
          anchorEl={anchorEl}
          id="simple-menu"
          keepMounted
          onClose={closeMenuHandler}
          open={Boolean(anchorEl)}>
          {menuItems.map((i, index) => {
            return (
              <MenuItemWrapper key={index}>
                {index > 0 && <Divider />}
                <MenuItem
                  disabled={i.disabled}
                  onClick={() => onMenuItemClick(i)}>
                  {i.label}
                </MenuItem>
              </MenuItemWrapper>
            );
          })}
        </Menu>
      </MenuWrapper>
    </ClickAwayListener>
  );
};

export default EllipsisMenu;
