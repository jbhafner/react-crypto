import React, { Component } from 'react';
import Paper from "material-ui/Paper";
// import "./contact.css";

const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "1%",
  textAlign: "center",
  display: "inline-block",
};

class ContactUs extends Component {
	state = { showing: true };

	render() {
		const { showing } = this.state;
		return(
             <div>
                <Paper style={paperStyle} zDepth={5}>             
                    <h1>We would love to hear from you and what you think of our project!</h1>
                </Paper>    

                <Paper style={paperStyle} zDepth={5}>
                    <div id="Tim">
                        <h1>Tim Thompsen</h1>

                        <blockquote>
                            An aspiring software engineer who is organized, detail-oriented, and a conscientious self-starter that is passionate
                            about technology. I have a knack for solving complex problems utilizing creative, dynamic and scalable solutions.
                        </blockquote>

                        <p>email: timmythompsen@gmail.com</p>
                        <p><a href="https://github.com/timmythompsen">Github: https://github.com/timmythompsen</a></p>
                        <p><a href="https://www.linkedin.com/in/timothythompsen/">LinkedIn: https://www.linkedin.com/in/timothythompsen/</a></p>
                    </div>
                </Paper>

                <Paper style={paperStyle} zDepth={5}>
                    <div id="Gail">
                        <h1>Gail McFadden</h1>

                        <blockquote>
                            A Quality Assurance, Project Management and UI/UX designer, with over ten years of experience in the web industry. Extensive experience working with operations and development teams doing QA and developing a customer journey with a belief in an Agile environment.
                        </blockquote>
                        <blockquote>    
                            Thinking outside the box to simplify complex problems, with an emphasis on simplicity, usability and aesthetics. Well versed in the latest technology trends, and continuously pursuing new and exciting challenges to create unique user experiences.
                        </blockquote>
                        <blockquote>     
                            A seasoned sales & marketing executive with an extensive background in demand generation and brand awareness.
                            I've implemented marketing processes and software engagement techniques to achieve campaigns that increase brand awareness & ROI.
                        </blockquote>
                        <blockquote>                        
                            Expertise in progressive concepts regarding content creation, personalized marketing, sales enablement & lead generation.
                        </blockquote>

                        <p>email: gemcfadden@hotmail.com</p>
                        <p><a href="https://github.com/gemcfadden1">Github: https://github.com/gemcfadden1</a></p>
                        <p><a href="https://www.linkedin.com/in/gail-mcfadden/">LinkedIn: https://www.linkedin.com/in/gail-mcfadden/</a></p>
                    </div> 
                </Paper>               

                <Paper style={paperStyle} zDepth={5}>
                    <div id="Brian">
                        <h1>Brian Hafner</h1>  
                        
                        <blockquote>
                            From an initial role as a computer programmer, my career evolved in the Japanese financial sector through a natural progression encompassing, systems, administration, analysis, and sales and marketing to the COO role overseeing all operations. 
                        </blockquote>
                        <blockquote>
                            I am attending the Full Stack Developer Coding Bootcamp at UC San Diego Extension to update my coding skills to include HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, and Express. Additionally, I am knowledgeable in financial markets, hedge funds and real estate as well as fluent in Japanese.                            
                        </blockquote>

                        <p>email: brian@brianhafner.com</p>
                        <p><a href="https://github.com/jbhafner">Github: https://github.com/jbhafner</a></p>
                        <p><a href="https://www.linkedin.com/in/jbrianhafner/">LinkedIn: https://www.linkedin.com/in/jbrianhafner/</a></p>


                    </div>
                </Paper>    
            </div> 
		)
	}
}

export default ContactUs;