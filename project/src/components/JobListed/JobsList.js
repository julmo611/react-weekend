import React from 'react'
import uuidv4 from 'uuid'
import Job from './Job';


const JobsList = props => {
    
  return (
    <div>
       {props.jobs.map( josbMap  => <Job job={josbMap} key={uuidv4()} />)}
      
    </div>
  )
}


export default JobsList;