import styled from "@emotion/styled"

/* eslint-disable-next-line */
export interface MolecularAtomsDarkModeTogglerProps {}

const StyledMolecularAtomsDarkModeToggler = styled.div`
  color: pink;
`

export function MolecularAtomsDarkModeToggler(props: MolecularAtomsDarkModeTogglerProps) {
  return (
    <StyledMolecularAtomsDarkModeToggler>
      <h1>Welcome to MolecularAtomsDarkModeToggler!</h1>
    </StyledMolecularAtomsDarkModeToggler>
  )
}

export default MolecularAtomsDarkModeToggler
