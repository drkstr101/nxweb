import React from "react"
import { Grid, Typography } from "@material-ui/core"
import SectionHeader from "@watheia/molecules.section-header"
import OverlappedImages from "@watheia/molecules.overlapped-images"

const Spaces = ({ className, ...rest }: ViewComponentProps): JSX.Element => (
  <div className={className} {...rest}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <SectionHeader
          label="SCALABLE"
          title={
            <span>
              <Typography color="secondary" variant="inherit" component="span">
                Flexible office space{" "}
              </Typography>
              means growing your team is easy.
            </span>
          }
          subtitle="Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor."
          align="left"
          fadeUp
          disableGutter
        />
      </Grid>
      <Grid item xs={12} md={6} data-aos="fade-up">
        <OverlappedImages
          image1={{
            src: "https://cdn.watheia.org/assets/photos/coworking/place1.jpg",
            srcSet: "https://cdn.watheia.org/assets/photos/coworking/place1@2x.jpg 2x",
            alt: "..."
          }}
          image2={{
            src: "https://cdn.watheia.org/assets/photos/coworking/place2.jpg",
            srcSet: "https://cdn.watheia.org/assets/photos/coworking/place2@2x.jpg 2x",
            alt: "..."
          }}
          image3={{
            src: "https://cdn.watheia.org/assets/photos/coworking/place3.jpg",
            srcSet: "https://cdn.watheia.org/assets/photos/coworking/place3@2x.jpg 2x",
            alt: "..."
          }}
        />
      </Grid>
    </Grid>
  </div>
)

export default Spaces
