import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import { Grid, Typography, colors } from "@material-ui/core"
import LearnMoreLink from "@watheia/atoms.learn-more-link"
import SectionHeader from "@watheia/molecules.section-header"
import IconAlternate from "@watheia/molecules.icon-alternate"
import { CardBase, DescriptionListIcon } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  learnMoreLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main
  }
}))

const Advantages = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  })

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            Watheia Labs is a Website Kit Platform that Helps you to{" "}
            <Typography color="secondary" variant="inherit" component="span">
              Build the Right Website for you Customers
            </Typography>
          </span>
        }
        subtitle="At Watheia Labs, we go to great lengths to provide you with the best, highest-quality components. In fact, we’re so confident about our kit, we even back our leads with a 95% accuracy guarantee."
        fadeUp
      />
      <Grid container spacing={isLg ? 10 : 2}>
        {data.map((item: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            data-aos="fade-up"
          >
            <CardBase liftUp variant="outlined">
              <>
                <DescriptionListIcon
                  title={item.title}
                  subtitle={item.description}
                  icon={
                    <IconAlternate
                      fontIconClass={item.icon}
                      size="medium"
                      color={colors.blue}
                    />
                  }
                />
                <LearnMoreLink
                  title="Learn more"
                  variant="body1"
                  className={classes.learnMoreLink}
                  color="secondary"
                />
              </>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Advantages
