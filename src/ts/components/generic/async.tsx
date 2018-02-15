import * as React from "react";

type AsyncComponentState<P extends {}> = {
  component?: React.SFC<P> | React.ComponentClass<P>,
};

export type importResult<P> = {
  default: React.SFC<P> | React.ComponentClass<P>
}

export type importCallback<P> = () => Promise<importResult<P>>;

export function asyncComponent<P>(importComponent: importCallback<P>): React.ComponentClass<P> {
  class AsyncComponent extends React.Component<P, AsyncComponentState<P>> {
    constructor(props: P) {
      super(props);

      this.state = {
        component: undefined
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}