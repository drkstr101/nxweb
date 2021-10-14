import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button } from "@material-ui/core"
import Image from "@watheia/molecular.atoms.image"
import { SectionHeader } from "@watheia/front.molecules"

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 560
  }
}))

const About = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <div>
            <SectionHeader
              title="Want to work with us?"
              subtitle="Send one-off and automated email, push, and in-app messages to people. Create better stories. Send one-off and automated email, push, and in-app messages to people. Create better stories."
              align="left"
              disableGutter
              subtitleProps={{
                color: "textPrimary",
                variant: "body1"
              }}
              ctaGroup={[
                <Button color="primary" variant="contained" size="large">
                  View open positions
                </Button>
              ]}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? "flex-end" : "flex-start"}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src="https://cdn.watheia.org/assets/illustrations/want-to-work.svg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
