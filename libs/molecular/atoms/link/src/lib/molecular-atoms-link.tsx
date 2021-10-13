import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface MolecularAtomsLinkProps {}

const StyledMolecularAtomsLink = styled.div`
  color: pink;
`

export function MolecularAtomsLink(props: MolecularAtomsLinkProps) {
  return (
    <StyledMolecularAtomsLink>
      <h1>Welcome to MolecularAtomsLink!</h1>
    </StyledMolecularAtomsLink>
  )
}

export default MolecularAtomsLink
