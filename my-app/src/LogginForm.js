import React, { Component } from 'react';

class LoggingForm extends Component {
  constructor(props){
    super(props);
    this.state={
      account: ""
    , passwords: ""
    };
  }

  handleChangeA = (event) => {
    this.setState({account: event.target.value});
  }

  handleCangeP = (event) => {
    this.setState({passwords: event.target.value});
  }

  submit = (event) => {
    console.log("Account: " + this.state.account + "  " + "PassWords: " + this.state.passwords);
    event.preventDefault();
  }

  render (){
    return (
      <form>
        <label>
          Account: 
          <input type="text" name="account" value={this.state.value} onChange={this.handleChangeA}/>
        </label>
        <br />
        <label>
          Passwords: 
          <input type="text" name="passwords" value={this.state.value} onChange={this.handleCangeP}/>
        </label>
        <br />
        <input type="submit" name="submit" value="確認" onClick={this.submit}/>
      </form>
    );
  }
}

export default LoggingForm;
