import React from 'react';
import Contact from './Contact';


class ContactsList extends React.Component{

	constructor(){
		super();
		this.state = {
			search:'Level Up'
		}
	}

	updateSearch(event){
		this.setState({search: event.target.value.substr(0,20)});
		//console.log(event.target.value);
	}

	render(){
		let filteredContacts = this.props.contacts.filter(
			(contact)=>{
				return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}

			);
		console.log(this);
		return(
			<div>
				<input type="text" value={this.state.search}
				onChange={this.updateSearch.bind(this)}/>

					<ul>

						{filteredContacts.map((contact)=>{
						return <Contact contact={contact} key={contact.id}/>
						})}
					</ul>
			</div>
		)
	}
}

export default ContactsList;