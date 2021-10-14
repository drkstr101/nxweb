import { HtmlHTMLAttributes } from "react"
import { TypographyProps } from "@material-ui/core/Typography"

export interface NumberProps {
  number: string | number
  title: string
}

export interface SwiperNumberProps extends HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * External classes
   */
  className?: string
  /**
   * The array of numbers object which should consist of number and title
   */
  items: Array<NumberProps>
  /**
   * The additional properties to pass to the number Typography component
   */
  numberProps?: object
  /**
   * The additional properties to pass to the label Typography component
   */
  labelProps?: TypographyProps
}
