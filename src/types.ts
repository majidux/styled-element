type OverflowType = Readonly<'hidden' | 'scroll' | 'visible' | 'clip' | 'auto'>;

type ScreenSizeType = Readonly<
  | 'auto'
  | 'fit-content'
  | 'inherit'
  | 'initial'
  | '-webkit-fill-available'
  | 'min-content'
  | 'max-content'
  | 'unset'
  | 'revert'
  | string
>;

export type ResponsiveTypes = {
  xxl?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  span?: number;
};

export type ViewProps = Readonly<{
  row?: boolean;
  display?:
    | 'flex'
    | 'grid'
    | 'block'
    | 'table-cell'
    | 'table-row'
    | 'none'
    | 'revert';
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'revert'
    | 'unset';
  height?: ScreenSizeType;
  width?: ScreenSizeType;
  backgroundColor?: string | any;
  backgroundImage?: string;
  backgroundRepeat?: 'no-repeat' | 'repeat';
  backgroundPositionY?: string;
  backgroundPositionX?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  minHeight?: ScreenSizeType;
  minWidth?: ScreenSizeType;
  padding?: string;
  margin?: string;
  justifyContent?:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-end' | 'flex-start' | 'center';
  position?: 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky';
  zIndex?: number;
  borderRadius?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  round?: boolean | string;
  border?: string;
  boxShadow?: string;
  overflow?: OverflowType;
  overflowX?: OverflowType;
  overflowY?: OverflowType;
  marginBottom?: string;
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  /** margin vertical */
  marginBlock?: string;
  /** margin horizontal */
  marginInline?: string;
  transform?: any;
  transitionDuration?: string | number;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  cursor?: 'pointer' | 'default' | 'hidden';
  verticalAlign?: 'middle';
  flexWrap?: 'wrap' | 'no-wrap';
  maxWidth?: ScreenSizeType;
  maxHeight?: ScreenSizeType;
  flex?: number | 'unset';
  tag?: 'div' | 'main' | 'section' | 'nav' | any;
  children?: any;
  all?: 'unset';
  textDecoration?: 'none';
  color?: string;
  className?: string;
  responsive?: Readonly<ResponsiveTypes>;
  opacity?: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  onClick?: (...parameter: any) => void | any;
  zoom?: string;
  direction?: string;
  gap?: string;
  gutter?: any;
  span?: any;
  userSelect?: 'none';
  flexBasis?: any;
  dangerouslySetInnerHTML?: { __html: string };
}>;
