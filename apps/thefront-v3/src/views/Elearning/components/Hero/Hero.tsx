import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import Image from "@watheia/atoms.image"
import SectionHeader from "@watheia/molecules.section-header"
import { HeroShaped } from "@watheia/front.organisms"

const useStyles = makeStyles(() => ({
  image: {
    objectFit: "cover"
  },
  fontWeight700: {
    fontWeight: 700
  }
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <Typography component="span" variant="inherit" color="primary">
                    Learn new skills,
                  </Typography>{" "}
                  gain more experience
                </span>
              }
              subtitle="Our mission is to spread education that is easy accessible and everyone can learn."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large">
                  Start now
                </Button>
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
            src="https://cdn.watheia.org/assets/photos/elearning/elearning.jpg"
            srcSet="https://cdn.watheia.org/assets/photos/elearning/elearning@2x.jpg 2x"
            alt="..."
            className={classes.image}
            lazyProps={{
              width: "100%",
              height: "100%"
            }}
          />
        }
      />
    </div>
  )
}

export default Hero
