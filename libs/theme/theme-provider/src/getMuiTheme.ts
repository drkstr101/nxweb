import { createTheme, responsiveFontSizes } from "@material-ui/core"
import { light, dark } from "./palette"

export const getMuiTheme = (mode: "light" | "dark") =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      typography: {
        fontFamily: "Roboto"
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100
      }
    })
  )

export default getMuiTheme
