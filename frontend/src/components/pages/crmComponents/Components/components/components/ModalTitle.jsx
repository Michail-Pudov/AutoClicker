import React, { PureComponent } from "react";

class ModalTitle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;

    return (
      <h4>
        <a href={item.vacancy.alternate_url}>{item.vacancy.name}</a>
      </h4>
    );
  }
}

export default ModalTitle;
