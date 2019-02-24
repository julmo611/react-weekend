import React from 'react'
import data from '../../data';
import JobsList from './JobsList'



class ContentJobs extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        };
    
    }
  
    componentDidMount() {
        this.setState({ jobs: data });
      }
  
  
  
  
  
  
    render() {
        
    return (
      <div>
          <JobsList jobs={this.state.jobs}/>
            
      </div>
    )
  }
}


export default ContentJobs;