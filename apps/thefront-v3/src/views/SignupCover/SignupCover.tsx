import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Form } from "./components"
import Image from "@watheia/atoms.image"
import SectionHeader from "@watheia/molecules.section-header"
import { HeroShaped } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => {
  const toolbar = theme.mixins.toolbar as any

  return {
    root: {
      "& .hero-shaped": {
        borderBottom: 0
      },
      "& .hero-shaped__wrapper": {
        [theme.breakpoints.up("md")]: {
          minHeight: `calc(100vh - ${toolbar["@media (min-width:600px)"].minHeight}px)`
        }
      }
    },
    formContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 500,
        margin: `0 auto`
      }
    },
    image: {
      objectFit: "cover"
    }
  }
})

const SignupCover = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Sign up"
              subtitle="Create beautiful marketing websites in hours instead of weeks."
              titleProps={{
                variant: "h3"
              }}
            />
            <Form />
          </div>
        }
        rightSide={
          <Image
            src="https://cdn.watheia.org/assets/photos/account/cover-2.png"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  )
}

export default SignupCover
