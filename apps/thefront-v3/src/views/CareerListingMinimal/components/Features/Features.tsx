import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, List, ListItem, Avatar, ListItemAvatar, Typography } from "@material-ui/core"
import Image from "@watheia/atoms.image"
import SectionHeader from "@watheia/molecules.section-header"
import { Section } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: "100%",
    background: theme.palette.primary.dark
  },
  textWhite: {
    color: "white"
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0
  },
  title: {
    fontWeight: "bold"
  }
}))

const Features = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image
            src="https://cdn.watheia.org/assets/photos/careers/team.png"
            srcSet="https://cdn.watheia.org/assets/photos/careers/team@2x.png 2x"
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <>
              <SectionHeader
                title="Monitor and analyze usage patterns."
                subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world."
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: clsx(classes.textWhite, classes.title)
                }}
                subtitleProps={{
                  className: classes.textWhite
                }}
              />
              <List>
                {data.map((item: any, index: number) => (
                  <ListItem disableGutters key={index} data-aos="fade-up">
                    <ListItemAvatar>
                      <Avatar
                        src="https://cdn.watheia.org/assets/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </>
          </Section>
        </Grid>
      </Grid>
    </div>
  )
}

export default Features
