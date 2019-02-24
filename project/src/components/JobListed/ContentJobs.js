import React from 'react'
import './jobsStyle.scss';
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
  
  
  
    markComplete = (jobTitle) => {
        this.setState({
            jobs: this.state.jobs.map(job => {
                if(job.jobTitle === jobTitle) {
                    job.completed = !job.completed
                }
                return job;
            })
        });
    }
  
  
    render() {
        
    return (
      <div>
          <JobsList jobs={this.state.jobs} markComplete={this.markComplete}/>
            
      </div>
    )
  }
}



export default ContentJobs;