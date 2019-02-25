import React, { Component } from 'react'

export default class AddJob extends Component {

    state = {
            id: '',
       jobTitle: '',
        company: '',
           city: '',
          state: '',
            url: '',
      firstName: '',
       lastName: '',
          email: '',
          phone: '',
         completed: false
    }

    onSubmit = (e) => {
        e.preventDefault();
       
        this.props.addJob(
            this.state.id,
            this.state.jobTitle,
            this.state.company,
            this.state.city,
            this.state.state,
            this.state.url,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phone,
            this.state.completed
        );
        this.setState({
                 id:'',
           jobTitle: '',
            company: '',
               city: '',
              state: '',
                url: '',
          firstName: '',
           lastName: '',
              email: '',
              phone: '',
       completed: false 
        })
        console.log(this.setState);
    }



   onChange = (e) => this.setState({
       [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input 
          
          className="form-control"
          type="text" 
          placeholder="Enter Job title"
          name="jobTitle"
          value={this.state.jobTitle}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter Company's Name"
          name="company"
          value={this.state.company}
          onChange={this.onChange}
          />
          <input
          className="form-control" 
          type="text" 
          placeholder="Enter City"
          name="city"
          value={this.state.city}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter State"
          name="state"
          value={this.state.state}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter Website"
          name="url"
          value={this.state.url}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter Last Name" 
          name="lastName"
          value={this.state.lastName}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter Email" 
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          />
          <input 
          className="form-control"
          type="text" 
          placeholder="Enter Phone Number"
          name="phone"
          value={this.state.phone}
          onChange={this.onChange}
          />
          <input type="submit" value="Submit" className="btn"/>
      </form>
    )
  }
}
