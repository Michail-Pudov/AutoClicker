import React, { Component } from 'react';
import M from 'materialize-css';


class Vacancy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '30%',
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const { item, index } = this.props;
    console.log(item);

    return (

      <div className="row">
        <div className="col s12">
          <div className="card grey lighten-4 ">
            <div className="log card-content grey-text text-darken-4">
              <span className="card-title">
                <a
                  onClick={() => {
                    window.open(item.alternate_url);
                  }}
                  className="modal-trigger"
                  data-target={index}
                  href={item.alternate_url}
                >
                  {item.name}
                </a>
              </span>
              <p>
                <b>Компания: </b>
                {item.employer
                  ? (
                    <a href={item.employer.alternate_url}>
                      {item.employer.name}
                    </a>
                  ) : 'Не указано'}
              </p>

              <p>
                <b>Зарплата: </b>

                {item.salary
                  ? ` От ${
                    item.salary.from ? item.salary.from : '...'
                  } ${
                    item.salary.currency
                      ? item.salary.currency
                      : '...'
                  } до ${
                    item.salary.to ? item.salary.to : '...'
                  } ${
                    item.salary.currency
                      ? item.salary.currency
                      : '...'
                  }`
                  : 'Не указано'}
              </p>
              <p>
                <b>Адрес: </b>
                {item.address
                  ? `${item.address.raw ? item.address.raw : 'Не указано'}`
                  : 'Не указано'}
              </p>
              <div
                ref={(Modal) => {
                  this.Modal = Modal;
                }}
                id={index}
                className="modal"
              >
                <div className="modal-content">
                  <h4>{item.name}</h4>
                  <br />
                  <p>Хотите добавить эту вакансию в личный кабинет?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-red btn"
                  >
                    Нет
                  </button>
                  <button
                    type="button"
                    className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-green btn"
                  >
                    Добавить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vacancy;
