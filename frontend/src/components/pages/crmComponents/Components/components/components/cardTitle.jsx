import React, { PureComponent } from 'react';

class CardTitle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, index } = this.props;
    return (
      <div className="tableItemText">
        <a
          className="modal-trigger"
          data-target={index}
          href={item.vacancy.alternate_url}
        >
          {item.vacancy.name}
        </a>
      </div>
    );
  }
}

export default CardTitle;
