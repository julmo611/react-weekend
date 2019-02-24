import React from 'react'

const Job = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.job.jobTitle}</p>
            <p>{props.job.company}</p>
            <p>{props.job.email}</p>
            <p>{props.job.phone}</p>
            <p>{props.job.state}</p>
            <p>{props.job.city}</p>
            <p>{props.job.url}</p>
            <p>{props.job.firstName}</p>
            <p>{props.job.lastName}</p>
        </>
    )
}


export default Job;