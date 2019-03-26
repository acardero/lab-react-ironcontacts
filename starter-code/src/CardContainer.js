import React, { Component, Fragment } from 'react';
import contacts from './contacts';
import otherContacts from './contacts';
import ContactCard from './ContactCard';
import CoolButton from './CoolButton';

class CardContainer extends Component {
    state = {contacts: contacts.slice(0,5)}

    addRandomContact = () => {
        const {contacts} = this.state;
        const copyOfContacts = [...otherContacts];
        const rest = copyOfContacts.splice(5);
        const random = Math.floor(Math.random()* rest.length);
        const newContact = rest[random];
        this.setState({contacts: [...contacts, newContact] });
    }
    
    render() {
        const {contacts} = this.state;
        return (
            <Fragment>
                <h1>IronContacts</h1>
                <CoolButton OnClick={this.addRandomContact} isInfo isMedium>Add Random Contact</CoolButton>
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                        {
                            contacts.map((contact, index)=>
                                <ContactCard key={index} contact={contact}/>
                            )
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default CardContainer;
