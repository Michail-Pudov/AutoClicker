import React, { PureComponent } from "react";

class CommentModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { state, writeData, iWantToRecordInformation, saveData } = this.props;

    return (
      <p>
        <b>Комментарий: </b>
        {state.writeComment ? (
          <>
            <input
              type="text"
              defaultValue={state.comment}
              name="comment"
              onChange={e => writeData(e)}
              style={{ cursor: "text" }}
            />
            <a
              name="writeComment"
              onClick={e => {
                saveData(e);
              }}
              style={{ cursor: "pointer" }}
            >
              ✅
            </a>
          </>
        ) : (
          <span>
            {state.comment ? state.comment : "Вы пока не оставили комментарий"}
            <a
              name="writeComment"
              onClick={e => {
                iWantToRecordInformation(e);
              }}
              style={{ cursor: "pointer" }}
            >
              ✏️
            </a>
          </span>
        )}
      </p>
    );
  }
}

export default CommentModal;
