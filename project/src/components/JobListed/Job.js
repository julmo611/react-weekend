import React from 'react'
import PropTypes from 'prop-types';
import './jobsStyle.scss';

class Job extends React.Component {

    getStyle = () => {
        if (this.props.job.completed) {
            return {
                backgroundColor: 'black',
                color: 'white'
            }
        } else {
            return {
                backgroundColor: 'none',
                color: 'black'
            }
        }
    }

  

    render() {
        const { firstName, jobTitle} = this.props.job;
        
    return (
        <div className="jobBox" style={this.getStyle()}>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, jobTitle)} /> {' '}
           <div className="cont-title"><h3>Job Title: </h3></div><div className="cont-value"><p>{jobTitle}</p></div>
            <div className="cont-title"><h3>Company: </h3></div><div className="cont-value"><p>{this.props.job.company}</p></div>
            <div className="cont-title"><h3>City:</h3></div><div className="cont-value"><p>{this.props.job.city}</p></div>
            <div className="cont-title"><h3>State:</h3></div><div className="cont-value"><p>{this.props.job.state}</p></div>
            <div className="cont-title"><h3>Website:</h3></div><div className="cont-value"><p>{this.props.job.url}</p></div>
            <div className="cont-title"><h3>First Name:</h3></div><div className="cont-value"><p>{firstName}</p></div>
            <div className="cont-title"><h3>Last Name</h3></div><div className="cont-value"><p>{this.props.job.lastName}</p></div>
            <div className="cont-title"><h3>Email: </h3></div><div className="cont-value"><p>{this.props.job.email}</p></div>
            <div className="cont-title"><h3>Phone:</h3></div><div className="cont-value"><p>{this.props.job.phone}</p></div>
        </div>
    )
    }
}


Job.propTypes = {
    job: PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,

    })
};

export default Job;