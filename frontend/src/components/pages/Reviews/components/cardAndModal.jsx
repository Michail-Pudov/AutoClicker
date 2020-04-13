import React, { PureComponent } from "react";
import M from "materialize-css";
import CommentInModal from "./components/commentInModal";

class CardAndModal extends PureComponent {
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
      startingTop: "2%",
      endingTop: "15%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const { item, index } = this.props;
    return (
      <div>
        <br />
        <a
          className="modal-trigger"
          data-target={item.companyId}
          href={item.company.employer.alternate_url}
        >
          {item.companyName}
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={item.companyId}
          className="modal"
        >
          <div className="modal-content">
            <h5>
              Работодатель:
              <a href={item.company.employer.alternate_url}>
                {" "}
                {item.companyName}
              </a>
              <p>Комментарии:</p>
              <ul className="collection">
                {item.comments.map((itemComment, indexComment) => (
                  <CommentInModal item={itemComment} index={indexComment} />
                ))}
              </ul>
            </h5>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              okey
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAndModal;
