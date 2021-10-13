import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface MolecularAtomsScrollTopProps {}

const StyledMolecularAtomsScrollTop = styled.div`
  color: pink;
`

export function MolecularAtomsScrollTop(props: MolecularAtomsScrollTopProps) {
  return (
    <StyledMolecularAtomsScrollTop>
      <h1>Welcome to MolecularAtomsScrollTop!</h1>
    </StyledMolecularAtomsScrollTop>
  )
}

export default MolecularAtomsScrollTop
