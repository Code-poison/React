import React, { Component } from 'react';

class LoggingForm extends Component {
  constructor(props){
    super(props);
    this.state={
      account: ""
    , passwords: ""
    };
  }

  handleChange = (event) => {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
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
          <input type="text" name="account" value={this.state.account} onChange={this.handleChange}/>
        </label>
        <br />
        <label>
          Passwords: 
          <input type="text" name="passwords" value={this.state.passwords} onChange={this.handleChange}/>
        </label>
        <br />
        <input type="submit" name="submit" value="確認" onClick={this.submit}/>
      </form>
    );
  }
}

export default LoggingForm;
