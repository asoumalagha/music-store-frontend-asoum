import React, { useContext, useEffect} from 'react';
import { StoreContext } from '../../context/StoreContext';
import PersonDetails from './PersonDetails';

const getAllPerson = () => {


    const {allPerson, getAllPersonApi} = useContext(StoreContext);

    useEffect(() => {
        getAllPersonApi();
    }, []);

    return(
        allPerson.length ?(
            <div className="person-list">
                <ul>
                    {allPerson.map((person) =>
                        {
                            return (<PersonDetails person={person} key={allPerson.id}/>);
                        })
                    }
                </ul>
            </div>

    ): (
            <div className="empty">No Music on your list.</div>
        )
    )

};

export default getAllPerson;


