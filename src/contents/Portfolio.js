import React, { Component } from 'react';
import project1 from '../img/Netflix.png';
import project2 from '../img/Expense.png';
import project3 from '../img/Facebook.png';
import project4 from '../img/Dynamic.jpeg';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="port_out port1 glass"><a href="https://github.com/owaissultan3000/netflix-clone"><img src={project1} className="po1"></img></a></div>
            <div class="port_out port2 glass"><a href="https://github.com/owaissultan3000/Expense-Tracker-App"><img src={project2} className="po1"></img></a></div>
            <div class="port_out port3 glass"><a href="https://github.com/owaissultan3000/facebook-clone"><img src={project3} className="po1"></img></a></div>
            <div class="port_out port4 glass"><a href="https://github.com/owaissultan3000/ALGO"><img src={project4} className="po1"></img></a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    