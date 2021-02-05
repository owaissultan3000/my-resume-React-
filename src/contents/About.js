import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Owais <mark className="mark2">Sultan</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of Computers from age of 19 years,
            now I’m 21 years old, Pursuing my Computer Science Degree From a reputable institution of Karachi.
            Web development is my center of interest, I always love the idea of MERN Stack development. I also like
            creating Interactive UI components for better UX  and share those design and codes
            to the world through Github.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>BS-CS From FAST NUCES</h4>
            <p className="p1">Karachi, Pakistan</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Augest 2018 - 2022</p>
            <h4>High School</h4>
            <p className="p1">Usman Public Higher Secondary School, Karachi</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2018</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Python</div>
            </div>
            )
        }
    }
    
export default About
    