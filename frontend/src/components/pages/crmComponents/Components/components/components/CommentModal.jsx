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
            />
            <a
              name="writeComment"
              onClick={e => {
                saveData(e);
              }}
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
