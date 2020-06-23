import React from 'react';
import { Container, Wrapper, Title, Button } from './styled';

export class ErrorBoundary<T> extends React.Component<T> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    // tslint:disable-next-line: no-console
    console.error(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Wrapper>
            <Title>
              Whooops, <br />
              <span>
                something went
                <br />
              </span>
              <span>
                <span>horribly wrong :(</span>
              </span>
            </Title>
            <Button onClick={() => window.location.reload()}>reload</Button>
          </Wrapper>
        </Container>
      );
    }

    return this.props.children;
  }
}
