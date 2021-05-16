/// <reference types="react" />

declare module 'react-preloaders' {
  export interface PreloaderProps {
    /**
     * String like String(hex, rgb,...)
     *
     * @default #2D2D2D
     */
    color?: string;

    /**
     * String like String(blur, gradient...)
     *
     * @default #F7F7F7
     */
    background?: string;

    /**
     * Number(Milliseconds)
     *
     * @default 1300ms
     */
    time?: number;

    /**
     * String like String(fade, slide...)
     *
     * @default fade
     */
    animation?: string;

    /**
     * @type Boolean
     */
    customLoading?: boolean;
  }

  export class Circle extends React.Component<PreloaderProps> {}
  export class Zoom extends React.Component<PreloaderProps> {}
  export class Sugar extends React.Component<PreloaderProps> {}
  export class Planets extends React.Component<PreloaderProps> {}
  export class Ripple extends React.Component<PreloaderProps> {}
  export class Dots extends React.Component<PreloaderProps> {}
  export class Lines extends React.Component<PreloaderProps> {}
  export class Circle2 extends React.Component<PreloaderProps> {}
  export class Cube extends React.Component<PreloaderProps> {}
  export class CustomPreloader extends React.Component<PreloaderProps> {}
}
