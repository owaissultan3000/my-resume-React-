import React, { Component } from 'react';
import Navitem from './Navitem';
import pic from '../img/mypic.jpg';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav className="glass">
            <img src={pic} alt="picm" className="profilepic"></img>
            <h2>Owais Sultan</h2>
            <p>Full Stack Developer</p>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Portfolio" tolink="/portfolio"  activec={this.activeitem}></Navitem>
            
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    