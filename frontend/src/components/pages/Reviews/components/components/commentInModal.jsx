import React, { PureComponent } from "react";

class CommentInModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, index } = this.props;
    return (
      <div style={{ backgroundColor: "#f0e4e4" }}>
        <p>
          Вакансия: <a href={item.urlVacancy}>{item.nameVacancy}</a>
        </p>
        <p>Отзыв: {item.review}</p>
        <p>{item.creator}</p>
      </div>
    );
  }
}

export default CommentInModal;
