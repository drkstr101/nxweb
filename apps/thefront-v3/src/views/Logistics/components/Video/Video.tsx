import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { colors } from "@material-ui/core"
import SectionHeader from "@watheia/molecules.section-header"
import { IconAlternate } from "@watheia/front.molecules"
import { Section, HeroBackground } from "@watheia/front.organisms"

const useStyles = makeStyles(() => ({
  textWhite: {
    color: "white"
  },
  video: {
    height: 324,
    maxWidth: 600,
    margin: "0 auto"
  }
}))

const Video = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} {...rest}>
      <HeroBackground
        backgroundImg="https://cdn.watheia.org/assets/photos/logistics/cover@2x.png"
        backgroundPosition="center center"
        backgroundColor={"#11092d"}
      >
        <Section narrow disablePadding>
          <>
            <SectionHeader
              title={<span className={classes.textWhite}>Wtach Our Video</span>}
              subtitle={
                <span className={classes.textWhite}>
                  After 3 days all of your offers will arrive and you will have another 7
                  days to select your new company.
                </span>
              }
              data-aos="fade-up"
            />
            <HeroBackground
              backgroundImg="https://cdn.watheia.org/assets/photos/logistics/cover@2x.png"
              backgroundPosition="center center"
              disbaleCoverOpacity
              className={classes.video}
              data-aos="fade-up"
            >
              <IconAlternate
                fontIconClass="fas fa-play"
                color={colors.grey}
                shape="circle"
              />
            </HeroBackground>
          </>
        </Section>
      </HeroBackground>
    </div>
  )
}

export default Video
