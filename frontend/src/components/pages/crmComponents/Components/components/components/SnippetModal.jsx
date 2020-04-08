import React, { PureComponent } from "react";

class SnippetModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;

    return (
      <p>
        <b>Описание: </b>{" "}
        {item.vacancy.snippet.responsibility
          ? item.vacancy.snippet.responsibility
          : "Не указано"}
      </p>
    );
  }
}

export default SnippetModal;
