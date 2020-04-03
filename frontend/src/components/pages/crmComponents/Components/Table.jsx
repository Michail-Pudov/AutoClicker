import React from 'react'
import { withRouter, Link } from "react-router-dom";

class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <div>
          {this.props.data.map(item => {
            return <><Link to={`/vac/${item.title}`}>{item.title}</Link><br/></>
          }
          )}
        </div>
      </>
    )
  }
}

export default Table

