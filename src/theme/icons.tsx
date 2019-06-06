import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

/**
 * Builds a custom icon, with the given `content` wrapped in an `SvgIcon`.
 *
 * @param {React.ReactElement<any>} content
 * @param {string} [viewBox]
 *
 * @return {React.ComponentType<SvgIconProps>}
 */
const buildCustomIcon = (
  content: React.ReactElement,
  viewBox?: string
): React.FunctionComponent<SvgIconProps> => (props: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} {...props}>
    {content}
  </SvgIcon>
);

/**
 * Creates an icon in the shape of the Ackama logo, with the given `fill`.
 *
 * @param {string} fill
 *
 * @return {React.ComponentType<SvgIconProps>}
 */
const buildAckamaLogoIcon = (fill: string) => buildCustomIcon(
  <g>
    <path fill={fill} opacity="1.0" d="M330.44,210.55a119.89,119.89,0,0,0-204.67-84.78L295.33,295.33A119.52,119.52,0,0,0,330.44,210.55Z" />
    <path fill={fill} opacity="0.3" d="M90.66,90.66V210.55a119.51,119.51,0,0,1,35.12-84.78Z" />
    <path fill={fill} opacity="0.3" d="M210.55,330.44H330.44l-35.12-35.12A119.52,119.52,0,0,1,210.55,330.44Z" />
    <path fill={fill} opacity="0.7" d="M330.44,210.55V330.44l-35.12-35.12A119.52,119.52,0,0,0,330.44,210.55Z" />
    <path fill={fill} opacity="0.7" d="M90.66,90.66H210.55a119.51,119.51,0,0,0-84.78,35.12Z" />
    <path fill={fill} opacity="0.5" d="M125.77,125.77A119.89,119.89,0,0,0,295.33,295.33Z" />
  </g>,
  '0 0 421.1 421.1'
);

export const AckamaLogoWhiteIcon = buildAckamaLogoIcon('#ffffff');
export const AckamaLogoGreenIcon = buildAckamaLogoIcon('#194740');

export const LightBulbOutlineIcon = buildCustomIcon(
  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
);

export const LightBulbFullIcon = buildCustomIcon(
  <path d="m9,21c0,0.55 0.45,1 1,1l4,0c0.55,0 1,-0.45 1,-1l0,-1l-6,0l0,1zm3,-19c-3.86,0 -7,3.14 -7,7c0,2.38 1.19,4.47 3,5.74l0,2.26c0,0.55 0.45,1 1,1l6,0c0.55,0 1,-0.45 1,-1l0,-2.26c1.81,-1.27 3,-3.36 3,-5.74c0,-3.86 -3.14,-7 -7,-7z" />
);

export const CopyToClipboardIcon = buildCustomIcon(
  <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z" />,
  '0 0 448 512'
);
