import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import SectionHeader from "@watheia/molecules.section-header"
import { TypedText } from "@watheia/front.molecules"
import { HeroShaped } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  fontWeight900: {
    fontWeight: 900
  },
  leftSideContent: {
    "& .section-header__cta-container": {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        "& .section-header__cta-item-wrapper": {
          width: "100%",
          "&:last-child": {
            marginLeft: 0,
            marginTop: theme.spacing(1)
          },
          "& .MuiButtonBase-root": {
            width: "100%"
          }
        }
      }
    }
  },
  heroShaped: {
    "& .hero-shaped__image": {
      backgroundColor: theme.palette.alternate.main
    },
    [theme.breakpoints.down("sm")]: {
      "& .hero-shaped__image": {
        position: "relative"
      },
      "& .hero-shaped__wrapper": {
        flexDirection: "column"
      }
    }
  },
  imageAnimation: {
    background: `url("https://cdn.watheia.org/assets/web-screens/home/home-hero-bg-light.png")`,
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "400px auto",
    animation: `$slideshow 50s linear infinite`,
    width: "600%",
    height: "600%",
    backgroundColor: theme.palette.alternate.dark,
    top: "-25%",
    left: "-100%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "800px auto"
    }
  },
  imageAnimationDark: {
    background: `url("https://cdn.watheia.org/assets/web-screens/home/home-hero-bg-dark.png")`
  },
  "@keyframes slideshow": {
    "0%": {
      transform: "rotate(-13deg) translateY(-25%)"
    },
    "100%": {
      transform: "rotate(-13deg) translateY(-80%)"
    }
  }
}))

const Hero = ({
  themeMode = "light",
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      We Build Micro Frontends!
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            "for creators...",
            "for designers...",
            "for developers...",
            "for operations...",
            "for the enterprise...",
            "and more..."
          ],
          typeSpeed: 50,
          loop: true
        }}
      />
    </Typography>
  )

  const subtitle =
    "Disrupt the web monolith! Develop and compose modular apps together in a fast and scalable way, with an amazing dev experience at every step."

  const docsButton = (
    <Button size="large" variant="outlined" color="primary" component="a" href="/docs">
      Find out How
    </Button>
  )

  const buyButton = (
    <Button size="large" variant="contained" color="primary" component="a" href="/contact">
      Free Consultation
    </Button>
  )

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: "h2",
        color: "textPrimary"
      }}
      ctaGroup={[docsButton, buyButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  )
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === "dark" ? classes.imageAnimationDark : ""
            )}
          />
        }
      />
    </div>
  )
}

export default Hero
