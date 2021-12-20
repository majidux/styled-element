import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { styleCreator } from './styleCreator';
import { ViewProps } from './types';

const excludes = ['tag', 'xxl', 'class-name', 'row', 'responsive'];

export const View = styled(
  (props: Readonly<ViewProps>): Readonly<ReactElement> => {
    const {
      tag = 'div',
      children,
      className,
      responsive,
      onMouseOver,
      onMouseLeave,
      onClick,
      dangerouslySetInnerHTML,
    } = props;
    const Tag = tag;
    return (
      <Tag
        {...responsive}
        {...{
          onMouseOver,
          onMouseLeave,
          onClick,
          className,
          dangerouslySetInnerHTML,
        }}
      >
        {children}
      </Tag>
    );
  }
)`
  ${(props: ViewProps) => styleCreator({ data: props, excludes })};
`;
