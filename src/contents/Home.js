import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/mypic.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Owais Sultan</h1>
            <ReactTypingEffect className="typingeffect" text={['MERN Stack Developer','Python Programmer']} speed={100} eraseDelay={900}/>
            <div className="hr_line glass"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    