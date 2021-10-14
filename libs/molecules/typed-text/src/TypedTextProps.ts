import { TypographyProps } from "@material-ui/core/Typography"

export interface TypedTextProps extends TypographyProps {
  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: Record<string, any>
}
