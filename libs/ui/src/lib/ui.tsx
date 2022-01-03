import styled from '@emotion/styled';
import {UiAtoms} from '@csnxreact/ui-atoms'

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  console.log('UI component')
  return (
    <StyledUi>
      <UiAtoms />
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}

