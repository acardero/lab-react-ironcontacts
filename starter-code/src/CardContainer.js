import React, { Component, Fragment } from 'react';
import contacts from './contacts';
import ContactCard from './ContactCard';
import CoolButton from './CoolButton';

class CardContainer extends Component {
    state = {contacts: contacts.slice(0,5)}
    
    render() {
        const {contacts} = this.state;
        return (
            <Fragment>
                <h1>IronContacts</h1>
                <CoolButton>Add Random Contact</CoolButton>
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
