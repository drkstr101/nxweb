import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, colors } from "@material-ui/core"

import { SectionHeader } from "@watheia/front.molecules"
import { HeroBackground } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(3, 2, 30, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3, 6, 30, 6)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5, 8, 30, 8)
    }
  },
  noPadding: {
    padding: 0
  }
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <HeroBackground
        backgroundImg="https://cdn.watheia.org/assets/illustrations/cities.jpg"
        backgroundColor="white"
        backgroundPosition="bottom center"
        contentSectionClassName={classes.noPadding}
        className={classes.hero}
        disbaleCoverOpacity
      >
        <SectionHeader
          title="We craft beautiful websites and digital products."
          subtitle="We design, develop and launch websites and products for startups, companies and ourselves."
          ctaGroup={[
            <Button color="primary" variant="contained" size="large">
              Contact us
            </Button>
          ]}
          fadeUp
          titleVariant="h3"
          titleProps={{
            style: { color: colors.grey[900] }
          }}
          subtitleProps={{
            style: { color: colors.grey[700] }
          }}
        />
      </HeroBackground>
    </div>
  )
}

export default Hero
