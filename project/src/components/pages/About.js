import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const About = props => {
    return (
         <>       
        <header>
        <h1>About</h1>
        </header>
        
        <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt exercitationem sunt nam impedit accusantium debitis amet aliquam, cumque voluptatem distinctio blanditiis expedita vitae sit hic placeat ipsa voluptas? Facilis, atque?</p>
            <Button className=""><Link to="/jobs">Search Jobs</Link></Button> 

        </div>
        </>
    )
}

export default About;