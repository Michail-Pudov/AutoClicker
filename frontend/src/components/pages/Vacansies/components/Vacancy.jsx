import React, { Component } from 'react';
import M from 'materialize-css';
import '../vacansies.css';

class Vacancy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {},
      onOpenEnd: () => {},
      onCloseStart: () => {},
      onCloseEnd: () => {},
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '30%',
    };
    M.Modal.init(this.Modal, options);
  }

  callStyleChange(e, value) {
    e.target
      .closest('.card-content')
      .querySelectorAll('a')
      .forEach((el) => (el.className += ' blue-text text-lighten-5'));
    const block = e.target.parentNode.parentNode.parentNode.parentNode;
    if (value) {
      block.className = 'card light-green';
    } else {
      block.className = 'card pink lighten-2';
    }
  }

  render() {
    const {
      item,
      index,
      openModalWindow,
      closeModalWindowAndWriteVacansies,
    } = this.props;

    return (
      <div className="col l10 m12 s12 offset-l1">
        <div className="card grey lighten-4 ">
          <div className="log card-content grey-text text-darken-4">
            <span className="card-title">
              <a
                onClick={() => {
                  openModalWindow(index, item.name);
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
              <b>Работодатель: </b>
              {item.employer ? (
                <a href={item.employer.alternate_url}>{item.employer.name}</a>
              ) : (
                'Не указано'
              )}
            </p>

            <p>
              <b>Зарплата: </b>

              {item.salary
                ? ` От ${item.salary.from ? item.salary.from : '...'} ${
                  item.salary.currency ? item.salary.currency : '...'
                } до ${item.salary.to ? item.salary.to : '...'} ${
                  item.salary.currency ? item.salary.currency : '...'
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
                <h5>{item.name}</h5>
                <br />
                <p>Хотите добавить эту вакансию в личный кабинет?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={(e) => {
                    this.callStyleChange(e, false);
                    closeModalWindowAndWriteVacansies(index, false);
                  }}
                  className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-red btn"
                >
                  Нет
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    this.callStyleChange(e, true);
                    closeModalWindowAndWriteVacansies(index, true);
                  }}
                  className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-green btn"
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vacancy;
