import { PureComponent } from "react";

export default class ActiveComponent extends PureComponent {
  state = {
    active: false
  };

  handleToggleActive = () => {
    this.setState(preState => ({
      active: !preState.active
    }));
  };

  render() {
    const { children } = this.props;
    const { active } = this.state;

    return children({
      active,
      handleToggleActive: this.handleToggleActive
    });
  }
}
