import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button } from "@material-ui/core"
import { Image } from "@watheia/front.atoms"
import { SectionHeader } from "@watheia/front.molecules"

const useStyles = makeStyles((theme) => ({
  image: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
  },
  lastGrid: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "40%"
    }
  }
}))

const Customization = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  return (
    <div className={className} {...rest}>
      <SectionHeader
        label="Customization"
        title="Customize your product"
        subtitle="We aim to take care of you. Need help with installation, find a bug, or just need a clarifiction about our documentation? We'll be there to lend a helping hand."
        align="center"
        ctaGroup={[
          <Button variant="contained" color="primary" size="large">
            Start now
          </Button>,
          <Button variant="outlined" color="primary" size="large">
            Learn more
          </Button>
        ]}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6}>
          <Grid container alignItems="center">
            <Image
              src="https://cdn.watheia.org/assets/illustrations/dashboard-screenshot.jpg"
              alt="Watheia Labs Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container alignItems="center" className={classes.lastGrid}>
            <Image
              src="https://cdn.watheia.org/assets/illustrations/dashboard-screenshot1.jpg"
              alt="Watheia Labs Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Customization
