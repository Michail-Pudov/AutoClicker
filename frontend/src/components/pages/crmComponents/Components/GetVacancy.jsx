import React, { PureComponent } from "react";
import { vacansiesFetch } from "../../../../allFetch/vacansiesFetch";
import { connect } from "react-redux";
import { writeFilters } from "../../../../redux/action";

class GetVacancy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: [{ name: "" }],
      result: [{name: "", alternate_url:''}]
    };
  }

  async componentDidMount() {

    
    let vacansies = await vacansiesFetch(this.props.filters);
    console.log(vacansies);
    console.log(this.props.email);

    let response = await fetch("http://localhost:5000/account/getBase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({
        email: this.props.email
      })
    });
    let result = await response.json();
   





    // let response = await fetch('http://localhost:5000/account/getBase', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8"},
    //     body: JSON.stringify({vacansies:vacansies, email:this.props.email} )
    // })
    
    
    
    // let result = await response.json()
    console.log('result' + result);
    
    // this.setState({
    //   result:result
    // });
    


  }

  render() {
    console.log(this.state);
     
    return (
      <div>
        {this.state.result.map(item => {
          return (
            <>
              <br />
              <a href={item.alternate_url}>{item.name}</a>
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
    email: state.email,
  };
};

const mapDispatchToProps = {
  writeFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(GetVacancy);
