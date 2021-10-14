import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import Image from "@watheia/atoms.image"

const useStyles = makeStyles((theme) => ({
  folioItem: {
    position: "relative",
    overflow: "hidden",
    margin: theme.spacing(1, 0),
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2)
    },
    "&:last-child": {
      [theme.breakpoints.up("md")]: {
        marginBottom: 0
      }
    }
  },
  image: {
    objectFit: "cover",
    height: 450
  },
  folioInfoWrapper: {
    padding: theme.spacing(4, 2)
  },
  folioTitle: {
    fontWeight: "bold"
  },
  folioSubtitle: {
    textTransform: "capitalize",
    margin: theme.spacing(1, 0)
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 500,
      margin: "0 auto"
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      maxWidth: "100%"
    }
  },
  gridWrapper: {
    display: "flex",
    flexDirection: "column"
  }
}))

const Main = ({ data, className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const leftGridData = data.slice(0, 4)
  const centerGridData = data.slice(4, 8)
  const rightGridData = data.slice(8)
  const wrapper = [leftGridData, centerGridData, rightGridData]

  return (
    <div className={className} {...rest}>
      <div className={classes.grid}>
        {wrapper.map((column, i) => (
          <div className={classes.gridWrapper} key={i}>
            {column.map((item: any, index: number) => (
              <div className={classes.folioItem} key={index} data-aos="fade-up">
                <Image
                  src={item.cover}
                  alt={item.title}
                  className={clsx("folio__image", classes.image)}
                  lazy={false}
                />
                <div className={clsx("folio__info-wrapper", classes.folioInfoWrapper)}>
                  <div>
                    <Typography
                      variant="h5"
                      className={classes.folioTitle}
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.folioSubtitle}
                      color="textSecondary"
                    >
                      {item.subtitle}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
