import React, { PureComponent } from "react";

class ContactsModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { state, writeData, saveData, iWantToRecordInformation } = this.props;
    return (
      <p>
        <b>Контакты: </b>
        {state.writeContacts ? (
          <>
            <input
              type="text"
              defaultValue={`${state.contacts}`}
              name="contacts"
              onChange={e => writeData(e)}
              style={{ cursor: "text" }}
            />
            <a
              name="writeContacts"
              onClick={e => {
                saveData(e);
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              ✅
            </a>{" "}
          </>
        ) : (
          <span>
            {state.contacts ? state.contacts : "Контакты отсутствуют"}
            <a
              name="writeContacts"
              onClick={e => {
                iWantToRecordInformation(e);
              }}
              style={{ cursor: "pointer" }}
            >
              {" "}
              ✏️
            </a>{" "}
          </span>
        )}
      </p>
    );
  }
}

export default ContactsModal;
