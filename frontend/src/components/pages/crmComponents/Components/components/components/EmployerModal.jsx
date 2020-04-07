import React, { PureComponent } from "react";

class EmployerModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, index } = this.props;

    return (
      <p>
        <b>Работодатель: </b>{" "}
        <a href={item.vacancy.employer.alternate_url}>
          {item.vacancy.employer.name}
        </a>
      </p>
    );
  }
}

export default EmployerModal;
