import React from 'react';
import ContactsList from './ContactsList';

let contacts=[{
	id:"1",
	name:"jhony",
	number:'444001213'
},{
	id:"2",
	name:"Glen",
	number:'400934233'
},{
	id:"3",
	name:"jack",
	number:'455645009'
},{
	id:"4",
	name:"jameson",
	number:'464644009'
}]

class App extends React.Component{
	render(){

		return(
			<div>
				<h1>Contacts</h1>
				<ContactsList contacts={this.props.Contacts}/>
			</div>
			)

	}
}
React.render(<App Contacts={contacts}/>,document.getElementById('app'));