import React, { PureComponent } from "react";

class AddresModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;

    return (
      <p>
        <b>Адрес: </b>
        {item.vacancy.address
          ? `${
              item.vacancy.address.raw ? item.vacancy.address.raw : "Не указано"
            }`
          : "Не указано"}
      </p>
    );
  }
}

export default AddresModal;
