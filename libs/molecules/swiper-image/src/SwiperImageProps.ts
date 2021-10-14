import { ImageProps } from "@watheia/atoms.image"
import { HtmlHTMLAttributes } from "react";

export interface SwiperImageProps extends HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * External classes
   */
  className?: string
  /**
   * External classes for the images
   */
  imageClassName?: string
  /**
   * The array of images object which should consist of src, alt and srcset attributes
   */
  items: Array<ImageProps>
  /**
   * Styles classes of the navigation button
   */
  navigationButtonStyle?: string
}
