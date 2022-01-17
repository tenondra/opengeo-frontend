/*
 * All variable settings in layouts
 * */

const colors = [
  'whiteAlpha',
  'blackAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
  'linkedin',
  'facebook',
  'messenger',
  'whatsapp',
  'twitter',
  'telegram',
];
// Basic color scheme that sets the appearance of all components
// negative actions (leave, kick, ...)
const NEGATIVE_COLOR_SCHEME = 'red';
const TARGET_MARKER_COLOR = 'red';

const sidebarIconSize = '1.8rem';
const sidebarSize = `calc(${sidebarIconSize} + 0.5rem * 2)`;
const expandedSidebarSize = `15rem`;
const expandButtonSize = '1em';

export {
  NEGATIVE_COLOR_SCHEME,
  TARGET_MARKER_COLOR,
  colors,
  sidebarSize,
  sidebarIconSize,
  expandedSidebarSize,
  expandButtonSize,
};
