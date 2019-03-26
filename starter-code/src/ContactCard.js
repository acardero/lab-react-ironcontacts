import React from 'react';
import CoolButton from './CoolButton';

function ContactCard({contact, deleteMethod, index})
{
    const {pictureUrl, name, popularity} = contact;
    return(
            <tr>
                <td><img src={pictureUrl} alt={name}/></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td><CoolButton isDanger OnClick={() => deleteMethod(index)}>Delete </CoolButton></td>
            </tr>
    )
}

export default ContactCard;