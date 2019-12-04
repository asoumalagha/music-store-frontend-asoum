import React from 'react';

const PersonDetails = ({person}) => {
    return (
        <li>
            <div className="person-details">
                <div className="person">
                    <h3>{person.name}</h3>
                </div>
            </div>
        </li>
    );
}

export default PersonDetails;