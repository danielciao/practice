import React, { PureComponent, forwardRef } from "react";

export default Component => defaultState => {
  class WithActiveState extends PureComponent {
    state = {
      active: defaultState || false
    };

    handleToggleActive = () => {
      this.setState(preState => ({
        active: !preState.active
      }));
    };

    render() {
      const { active, forwardedRef } = this.state;

      return (
        <Component
          ref={forwardedRef}
          active={active}
          handleToggleActive={this.handleToggleActive}
          {...this.props}
        />
      );
    }
  }

  function forwardComponentRef(props, ref) {
    return <WithActiveState {...props} forwardedRef={ref} />;
  }

  const componentName = Component.displayName || Component.name || "Component";
  WithActiveState.displayName = `withActiveState(${componentName})`;

  return forwardRef(forwardComponentRef);
};
