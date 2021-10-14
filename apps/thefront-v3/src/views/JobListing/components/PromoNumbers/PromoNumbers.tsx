import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Button } from "@material-ui/core"
import Image from "@watheia/molecular.atoms.image"
import { SectionHeader, CountUpNumber } from "@watheia/front.molecules"
import { CardBase } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  placementGrid: {
    display: "flex",
    justifyContent: "space-around"
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`
  },
  image: {
    maxWidth: 400
  }
}))

const PromoNumbers = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} {...rest}>
      <CardBase withShadow liftUp>
        <Grid container spacing={2}>
          <Grid item container justify="center" alignItems="center" xs={12} md={2}>
            <Image
              src="https://cdn.watheia.org/assets/illustrations/high.svg"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <SectionHeader
              title="Hiring? Candidates are working for you"
              data-aos="fade-up"
            />
            <div className={classes.placementGrid} data-aos="fade-up">
              <div>
                <CountUpNumber
                  end={14000}
                  suffix="+"
                  label="Newsletter"
                  textColor="primary"
                  labelColor="textPrimary"
                />
              </div>
              <div className={classes.placementGridItemMiddle}>
                <CountUpNumber
                  end={3000}
                  label="Jobs"
                  textColor="primary"
                  labelColor="textPrimary"
                />
              </div>
              <div>
                <CountUpNumber
                  end={3000}
                  label="Avarage"
                  textColor="primary"
                  labelColor="textPrimary"
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            alignItems="flex-end"
            justify="center"
            xs={12}
            md={2}
            data-aos="fade-up"
          >
            <Button color="primary" variant="contained" fullWidth size="large">
              Post a job
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  )
}

export default PromoNumbers
