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

    sortByName = () => {
        const copyOfContacts = [...this.state.contacts];
        copyOfContacts.sort(function(a, b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
        this.setState({contacts: copyOfContacts});
    }

    sortByPopularity= () => {
        const copyOfContacts = [...this.state.contacts];
        copyOfContacts.sort(function(a, b){
            return b.popularity - a.popularity;
          });
        this.setState({contacts: copyOfContacts});
    }
    
    render() {
        const {contacts} = this.state;
        return (
            <Fragment>
                <h1>IronContacts</h1>
                <CoolButton OnClick={this.addRandomContact} isInfo isSmall>Add Random Contact</CoolButton>
                <CoolButton OnClick={this.sortByName} isInfo isSmall>Sort by Name</CoolButton>
                <CoolButton OnClick={this.sortByPopularity} isInfo isSmall>Sort by Popularity</CoolButton>
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
