import React from "react"
import { Box } from "@material-ui/core"
import { Headline, CodeHighlighter, PropsHighlighter, SectionBox } from "../../components"
import SwiperImage from "@watheia/molecules.swiper-image"

const importCodeString = `
import SwiperImage from "@watheia/molecules.swiper-image"
`

const dataProperties = [
  {
    name: "items",
    type: "object[]",
    default: "",
    description:
      "The array of images object which should consist of src, alt and srcset attributes"
  },
  {
    name: "className",
    type: "string",
    default: "",
    description: "External classes"
  },
  {
    name: "imageClassName",
    type: "string",
    default: "",
    description: "External classes for the images"
  },
  {
    name: "navigationButtonStyle",
    type: "string",
    default: "",
    description: "Styles classes of the navigation button"
  }
]

const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import SwiperImage from "@watheia/molecules.swiper-image"
import 'swiper/swiper.min.css';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SwiperImage
        style={{
            width: 500,
            height: 300,
        }}
        items={[{
            src: 'https://cdn.watheia.org/assets/photos/coworking/place2.jpg',
            srcset: 'https://cdn.watheia.org/assets/photos/coworking/place2.jpg 2x',
            alt: '...'
        }, {
            src: 'https://cdn.watheia.org/assets/photos/coworking/place3.jpg',
            srcset: 'https://cdn.watheia.org/assets/photos/coworking/place3.jpg 2x',
            alt: '...'
        }]}
      />
    </Box>
  );
}
`

const SwiperImageExample = ({ ...rest }: any): JSX.Element => (
  <div {...rest}>
    <SectionBox title="Description" gutterBottom>
      <Headline
        title="SwiperImage"
        path="src/components/molecules/SwiperImage/SwiperImage.js"
        description="Component to display the image swiper"
      />
    </SectionBox>
    <SectionBox title="Import" gutterBottom>
      <CodeHighlighter code={importCodeString} />
    </SectionBox>
    <SectionBox title="Props & Methods" gutterBottom>
      <PropsHighlighter dataProperties={dataProperties} />
    </SectionBox>
    <SectionBox title="Example" gutterBottom>
      <>
        <Box
          marginBottom={2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          padding={2}
          border="1px solid #ccc"
          borderRadius="4px"
        >
          <SwiperImage
            style={{
              width: 700,
              height: 500
            }}
            items={[
              {
                src: "https://cdn.watheia.org/assets/photos/coworking/place2.jpg",
                srcset: "https://cdn.watheia.org/assets/photos/coworking/place2.jpg 2x",
                alt: "..."
              },
              {
                src: "https://cdn.watheia.org/assets/photos/coworking/place3.jpg",
                srcset: "https://cdn.watheia.org/assets/photos/coworking/place3.jpg 2x",
                alt: "..."
              }
            ]}
          />
        </Box>
        <CodeHighlighter code={exampleCode} />
      </>
    </SectionBox>
  </div>
)

export default SwiperImageExample
