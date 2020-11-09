import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledApps = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 1px 2px 10px 0
    ${({ theme }) => rgba(theme.colors.shadow.color, 0.18)};
  border-radius: 8px;
  padding: 24px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 244px;
  height: 232px;

  :hover {
    box-shadow: 1px 2px 16px 0
      ${({ theme }) => rgba(theme.colors.shadow.color, 0.35)};
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;

    h4 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Apps = ({ className, children }: Props): React.ReactElement => (
  <StyledApps className={className}>{children}</StyledApps>
);

export default Apps;
