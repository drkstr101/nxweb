import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { useMediaQuery, Grid } from "@material-ui/core"
import Image from "@watheia/atoms.image"
import LearnMoreLink from "@watheia/atoms.learn-more-link"
import SectionHeader from "@watheia/molecules.section-header"
import { CardBase } from "@watheia/front.organisms"

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50
  }
}))

const Integrations = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="We love to explore new ways to engage with brands and reach"
                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
                align="left"
                label="100+ Integrations"
                ctaGroup={[
                  <LearnMoreLink title="See all integrations" href="#" variant="h6" />
                ]}
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Image
                src="https://cdn.watheia.org/assets/illustrations/progressive-app.svg"
                alt="Integrations"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? "row" : "column-reverse"}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Grid container spacing={2}>
                {data.map((item: any, index: number) => (
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className={classes.logo}
                        lazy={false}
                      />
                    </CardBase>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="We love to explore new ways to engage with brands and reach"
                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
                align="left"
                label="100+ Integrations"
                ctaGroup={[
                  <LearnMoreLink title="See all integrations" href="#" variant="h6" />
                ]}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Integrations
