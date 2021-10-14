import React from "react"
import { Box } from "@material-ui/core"
import { Headline, CodeHighlighter, PropsHighlighter, SectionBox } from "../../components"
import OverlappedImages from "@watheia/molecules.overlapped-images"

const importCodeString = `
import { OverlappedImages } from 'components/molecules';
// or
import OverlappedImages from 'components/molecules/OverlappedImages';
`

const dataProperties = [
  {
    name: "image1",
    type: "object",
    default: "",
    description: "Image item - Object of src, srcset and alt properties"
  },
  {
    name: "image2",
    type: "object",
    default: "",
    description: "Image item - Object of src, srcset and alt properties"
  },
  {
    name: "image3",
    type: "object",
    default: "",
    description: "Image item - Object of src, srcset and alt properties"
  },
  {
    name: "className",
    type: "string",
    default: "",
    description: "External classes"
  }
]

const exampleCode = `
import React from 'react';
import { Box } from '@material-ui/core';
import { OverlappedImages } from 'components/molecules';

export default function Example() {
  return (
    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <OverlappedImages
        image1={{
            src: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery1.jpg',
            srcSet: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery1@2x.jpg 2x',
            alt: '...',
        }}
        image2={{
            src: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery2.jpg',
            srcSet: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery2@2x.jpg 2x',
            alt: '...',
        }}
        image3={{
            src: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery3.jpg',
            srcSet: 'https://cdn.watheia.org/assets/photos/expo-gallery/gallery3@2x.jpg 2x',
            alt: '...',
        }}
      />
    </Box>
  );
}
`

const OverlappedImagesExample = ({ ...rest }: any): JSX.Element => (
  <div {...rest}>
    <SectionBox title="Description" gutterBottom>
      <Headline
        title="OverlappedImages"
        path="src/components/molecules/OverlappedImages/OverlappedImages.js"
        description="Component to display the overlapped images"
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
          <OverlappedImages
            image1={{
              src: "https://cdn.watheia.org/assets/photos/expo-gallery/gallery1.jpg",
              srcSet:
                "https://cdn.watheia.org/assets/photos/expo-gallery/gallery1@2x.jpg 2x",
              alt: "..."
            }}
            image2={{
              src: "https://cdn.watheia.org/assets/photos/expo-gallery/gallery2.jpg",
              srcSet:
                "https://cdn.watheia.org/assets/photos/expo-gallery/gallery2@2x.jpg 2x",
              alt: "..."
            }}
            image3={{
              src: "https://cdn.watheia.org/assets/photos/expo-gallery/gallery3.jpg",
              srcSet:
                "https://cdn.watheia.org/assets/photos/expo-gallery/gallery3@2x.jpg 2x",
              alt: "..."
            }}
          />
        </Box>
        <CodeHighlighter code={exampleCode} />
      </>
    </SectionBox>
  </div>
)

export default OverlappedImagesExample
