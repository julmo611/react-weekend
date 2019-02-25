import React from 'react'
import './jobsStyle.scss';
import autoBind from 'react-autobind';
import data from '../../data';
import JobsList from './JobsList';
import Header from './Header';
import AddJob from './AddJob';
import uuidv4 from 'uuid';



class ContentJobs extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            value: ''
          
        };
        autoBind(this);
    }
  
    componentDidMount() {
        this.setState({
             jobs: data,
        });
      }
  
  
  
    markComplete = id => {
        this.setState({
            jobs: this.state.jobs.map(job => {
                if(job.id === id) {
                    job.completed = !job.completed
                }
                return job;
            })
        });
    }
  
  
    delJob = id => {
        this.setState({
            jobs: [...this.state.jobs.filter(job => job.id !== id)]

        })
    }

    clearAll = e => {
        e.preventDefault();
       console.log('clear')
        this.setState({
            
            jobs: this.state.jobs.filter(job => job.completed)
        });
    };

    renderAgian = e => {
        // e.preventDefault();
        window.location.reload();
       
    }

    // AddJob

    addJob = (id, jobTitle, company, city, state, url, firstName, lastName, email, phone, completed ) => {

        const newJobs = {
                id: uuidv4(),
           jobTitle: jobTitle,
            company: company,
               city: city,
              state: state,
                url: url,
          firstName: firstName,
           lastName: lastName,
              email: email,
              phone: phone,
    completed: false

        }

        this.setState({
            jobs: [...this.state.jobs, newJobs],
       
        })
    }



    updateSearch = event => {
        console.log(this.updateSearch);
        this.setState({value: event.target.value});
    }

    render() {
        
    return (
           <>
                
                <Header />
                <div className="main-layout">
                    <div className="add-box">
                        <AddJob addJob={this.addJob}/>
                    </div>
                    <div className="search-box">
                    <button onClick={this.renderAgian} className="btn">Full list</button>
                    <button onClick={this.clearAll} className="btn" >Compare selected jobs</button> 
                
                 
                    <JobsList jobs={this.state.jobs} markComplete={this.markComplete} delJob={this.delJob} value={this.state.value}
                    updateSearch={this.updateSearch.bind(this)} />
                        
                    </div>
                </div>
            </>
      
    )
  }
}



export default ContentJobs;