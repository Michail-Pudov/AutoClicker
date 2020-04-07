import React from 'react';
import M from 'materialize-css';

class ModalAndCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      writeComment: false,
      writeContacts: false,
      writeStatus: false,
      comment: '',
      contacts: '',
      status: '',
    };
  }

  componentDidMount() {
    this.setState({
      comment: this.props.item.comment,
      contacts: this.props.item.contacts,
      status: this.props.item.status,
    });
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

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  iWantToRecordInformation(e) {
    this.setState({
      [e.target.name]: true,
    });
  }

  writeData(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveData(e) {
    this.setState({
      [e.target.name]: false,
    });
  }

  render() {
    const { item, index } = this.props;
    return (
      <div className="row">
        <div className="col s7">
          <div className="card grey lighten-4 ">
            <div className="log card-content grey-text text-darken-4">
              <span className="">
                <a
                  className="modal-trigger"
                  data-target={index}
                  href={item.vacancy.alternate_url}
                >
                  {item.vacancy.name}
                </a>
              </span>
              <p>
                <b>Зарплата: </b>
                {item.vacancy.salary
                  ? ` От ${
                    item.vacancy.salary.from
                      ? item.vacancy.salary.from
                      : '...'
                  } ${
                    item.vacancy.salary.currency
                      ? item.vacancy.salary.currency
                      : '...'
                  } до ${
                    item.vacancy.salary.to ? item.vacancy.salary.to : '...'
                  } ${
                    item.vacancy.salary.currency
                      ? item.vacancy.salary.currency
                      : '...'
                  }`
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
                  <h4>
                    {' '}
                    <a href={item.vacancy.alternate_url}>{item.vacancy.name}</a>
                  </h4>
                  <p>
                    <b>Работодатель: </b>
                    {' '}
                    <a href={item.vacancy.employer.alternate_url}>
                      {item.vacancy.employer.name}
                    </a>
                  </p>
                  <p>
                    <b>Зарплата: </b>
                    {item.vacancy.salary
                      ? ` От ${
                        item.vacancy.salary.from
                          ? item.vacancy.salary.from
                          : '...'
                      } ${
                        item.vacancy.salary.currency
                          ? item.vacancy.salary.currency
                          : '...'
                      } до ${
                        item.vacancy.salary.to
                          ? item.vacancy.salary.to
                          : '...'
                      } ${
                        item.vacancy.salary.currency
                          ? item.vacancy.salary.currency
                          : '...'
                      }`
                      : 'Не указано'}
                  </p>
                  <p>
                    {' '}
                    <b>Описание: </b>
                    {' '}
                    {item.vacancy.snippet.responsibility}
                  </p>
                  <p>
                    <b>Адрес: </b>
                    {item.vacancy.address
                      ? `${
                        item.vacancy.address.raw
                          ? item.vacancy.address.raw
                          : 'Не указано'
                      }`
                      : 'Не указано'}
                  </p>
                  <p>
                    <b>Комментарий: </b>
                    {this.state.writeComment ? (
                      <>
                        <input
                          type="text"
                          defaultValue={this.state.comment}
                          name="comment"
                          onChange={(e) => this.writeData(e)}
                        />
                        <a
                          name="writeComment"
                          onClick={(e) => {
                            this.saveData(e);
                          }}
                        >
                          {' '}
                          ✅
                        </a>
                        {' '}
                      </>
                    ) : (
                      <span>
                        {this.state.comment
                          ? this.state.comment
                          : 'Вы пока не оставили комментарий'}
                        <a
                          name="writeComment"
                          onClick={(e) => {
                            this.iWantToRecordInformation(e);
                          }}
                        >
                          {' '}
                          ✏️
                        </a>
                        {' '}
                      </span>
                    )}
                  </p>
                  <p>
                    <b>Контакты: </b>
                    {this.state.writeContacts ? (
                      <>
                        <input
                          type="text"
                          defaultValue={this.state.contacts}
                          name="contacts"
                          onChange={(e) => this.writeData(e)}
                        />
                        <a
                          name="writeContacts"
                          onClick={(e) => {
                            this.saveData(e);
                          }}
                        >
                          {' '}
                          ✅
                        </a>
                        {' '}
                      </>
                    ) : (
                      <span>
                        {this.state.contacts
                          ? this.state.contacts
                          : 'Контакты отсутствуют'}
                        <a
                          name="writeContacts"
                          onClick={(e) => {
                            this.iWantToRecordInformation(e);
                          }}
                        >
                          {' '}
                          ✏️
                        </a>
                        {' '}
                      </span>
                    )}
                  </p>
                  <p>
                    <b>Статус: </b>
                    {this.state.status}
                  </p>
                </div>
                <div className="modal-footer">
                  <a className="modal-close waves-effect waves-green btn-flat">
                    okey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAndCard;
