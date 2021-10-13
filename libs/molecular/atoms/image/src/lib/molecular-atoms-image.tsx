import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface MolecularAtomsImageProps {}

const StyledMolecularAtomsImage = styled.div`
  color: pink;
`

export function MolecularAtomsImage(props: MolecularAtomsImageProps) {
  return (
    <StyledMolecularAtomsImage>
      <h1>Welcome to MolecularAtomsImage!</h1>
    </StyledMolecularAtomsImage>
  )
}

export default MolecularAtomsImage
