import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import SectionHeader from "@watheia/molecules.section-header"

const useStyles = makeStyles(() => ({
  textWhite: {
    color: "white",
    textTransform: "uppercase"
  }
}))

const MadCap = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>MAD CAP</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>The coffee company</span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            See portfolio
          </Button>
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  )
}

export default MadCap
