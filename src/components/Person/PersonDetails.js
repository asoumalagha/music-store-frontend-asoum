import React, {useContext} from 'react';
import {StoreContext} from "../../context/StoreContext";
const PersonDetails = ({allPerson}) => {


    return (
        <li>
            <div className="person-details">
                <div className="person">
                    <h3>{allPerson.name}</h3>
                </div>
            </div>
        </li>
    );
}

export default PersonDetails;