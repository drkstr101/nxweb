import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Typography, Grid } from "@material-ui/core"
import Image, { ImageProps } from "@watheia/atoms.image"
import { CardProduct } from "@watheia/front.organisms"

const useStyles = makeStyles((theme) => ({
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.spacing(1),
    boxShadow: "none",
    background: "transparent",
    paddingBottom: theme.spacing(2),
    "& .card-product__content": {
      padding: theme.spacing(4),
      zIndex: 1,
      background: theme.palette.background.paper,
      width: "90%",
      margin: "0 auto",
      marginTop: theme.spacing(-6),
      borderRadius: theme.spacing(1),
      boxShadow: "0 3px 10px 2px rgba(0, 0, 0, 0.1)"
    },
    "& .card-product__media": {
      minHeight: 300,
      "& img": {
        transitionDuration: ".7s",
        transform: "scale(1.0)"
      }
    },
    "&:hover": {
      "& .card-product__media img": {
        transform: "scale(1.2)"
      }
    }
  },
  image: {
    objectFit: "cover"
  },
  blogTitle: {
    fontWeight: 700
  },
  tags: {
    display: "flex",
    flexWrap: "wrap"
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: "white",
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 2, 2, 0)
    }
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0)
    }
  },
  fontWeightBold: {
    fontWeight: "bold"
  }
}))

const VerticalOverlapped = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  const BlogMediaContent = (props: ImageProps) => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: "100%", height: "100%" }}
    />
  )

  const BlogContent = (props: any) => (
    <div>
      <div className={classes.tags}>
        {props.tags.map((item: any, index: number) => (
          <Typography variant="caption" className={classes.tag} key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <Typography variant="h6" color="textPrimary" className={classes.blogTitle}>
        {props.title}
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.author}>
        <i>
          {props.author.name} - {props.date}
        </i>
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {props.subtitle}
      </Typography>
    </div>
  )

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
            <CardProduct
              className={classes.cardProduct}
              mediaContent={<BlogMediaContent {...item.cover} alt={item.title} />}
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default VerticalOverlapped
