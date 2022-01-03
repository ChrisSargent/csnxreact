import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiAtomsProps {}

const StyledUiAtoms = styled.div`
  color: pink;
`;

export function UiAtoms(props: UiAtomsProps) {
  console.log('UiAtoms component')
  return (
    <StyledUiAtoms>
      <h1>Welcome to UiAtoms!</h1>
    </StyledUiAtoms>
  );
}

