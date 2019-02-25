import React from 'react'
import uuidv4 from 'uuid'
import Job from './Job';



class JobsList extends React.Component {
    
     render() {
        const { jobs, markComplete, delJob, value, updateSearch} = this.props;
       
        let filteredJobs = jobs.filter( job => { return job.jobTitle.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
  return (
    <div className="job-search">  
       <input type="text"
        value={value}
        onChange={updateSearch} 
        className="form-control"
        placeholder="Search for Job title (ex. Producer)"
        /> 
          
       {filteredJobs.map( josbMap  => <Job job={josbMap} key={uuidv4()} markComplete={markComplete} delJob={delJob}/>)}

    </div>
  )
    }
}


export default JobsList;