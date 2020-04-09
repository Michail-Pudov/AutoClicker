import React, { PureComponent } from 'react';

class CommentInModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, index } = this.props;
    return (


      <li className="collection-item">
        <div className="textModal">
          <p>
            Вакансия:
            {' '}
            <a href={item.urlVacancy}>{item.nameVacancy}</a>
          </p>
          <p>
            Отзыв:
            {' '}
            {item.review}
          </p>
          <p>
            Автор:
            {' '}
            {' '}
            {item.creator}
          </p>
        </div>
      </li>
    );
  }
}

export default CommentInModal;
