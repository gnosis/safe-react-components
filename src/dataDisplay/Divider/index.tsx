import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  withoutMargin?: boolean;
};

const HorizontalDivider = styled.div<{ withoutMargin?: 'boolean' }>`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '16px')} 0;
`;

const VerticalDivider = styled.div<{ withoutMargin?: boolean }>`
  border-right: 2px solid ${({ theme }) => theme.colors.separator};
  margin: ${({ withoutMargin }) => (withoutMargin ? 0 : '0 16px')} 0;
  height: 100%;
`;

const Divider = ({ className, orientation }: Props): React.ReactElement => {
  return orientation === 'vertical' ? (
    <VerticalDivider className={className} />
  ) : (
    <HorizontalDivider className={className} />
  );
};

export default Divider;
