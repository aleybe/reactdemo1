import React, { ReactComponent } from "react";
import Beer from "../beerComp/Beer";

import './background.css';
import './centerPane.css';

// function createNewBeer(list) {
//   console.log(list);
//   console.log("this executed")
//   list.push(<Beer/>)
// }

class CenterPane extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      value: '',
      list: [],
    };
  }


  appendChild(){
    console.log("Adding new beer");

    this.setState(state => {
      
      state.value = (<Beer/>);
      const list = [...state.list, state.value];

      return {
        list,
        value: '',
      };
    });
  };


  render() {
    return (
      <main role="main" className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <button className="btn btn-success" onClick={() => {
              this.appendChild();
              console.log(this.state.list); 
            }}> Beer me! </button>
          </div>
          <div className="col-md-6">
            <div id="appendable" className="card">
              <div className="card-body">
                <ul>
                  {this.state.list.map((child, index) => (
                    <li key={index}>{child}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </main>
    );
  }
}

export default CenterPane;