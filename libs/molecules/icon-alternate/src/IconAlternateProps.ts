export interface IconAlternateProps {
  /**
   * External classes
   */
  className?: string
  /**
   * The classes of the font icon
   */
  fontIconClass: string
  /**
   * Sizes of the icon
   */
  size?: "extraSmall" | "small" | "medium" | "large"
  /**
   * Color of the icon
   */
  color?: any
  /**
   * The shape of the alternate icon
   */
  shape?: "circle" | "square"
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps?: Record<string, any>

  // All other props
  [x: string]: any
}
