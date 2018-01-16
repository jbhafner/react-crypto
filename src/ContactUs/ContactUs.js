import React, { Component } from 'react';

class ContactUs extends Component {
	state = { showing: true };

	render() {
		const { showing } = this.state;
		return(
         <div>
             <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
             { showing 
                 ? <div>This is visible</div>
                 : null
             }
         </div> 
		)
	}
}

export default ContactUs;