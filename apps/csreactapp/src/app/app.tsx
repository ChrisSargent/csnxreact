import styled from '@emotion/styled';
import {NxWelcome} from './nx-welcome';
import {Ui} from '@csnxreact/ui'
import {UiAtoms} from '@csnxreact/ui-atoms'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="csreactapp" />
      <Ui />
      <UiAtoms />
    </StyledApp>
  );
}

