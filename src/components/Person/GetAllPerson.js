import React, { useContext, useEffect} from 'react';
import { StoreContext } from '../../context/StoreContext';
import PersonDetails from './PersonDetails';

const GetAllPerson = () => {


    const {allPerson, getAllPersonApi} = useContext(StoreContext);

    useEffect(() => {
        getAllPersonApi();
    }, []);

    return(
        allPerson.length ?(
            <div className="person-list">
                <ul>
                    {allPerson.map((allPerson) =>
                        {
                            return (<PersonDetails allPerson={allPerson} key={allPerson.id}/>);
                        })
                    }
                </ul>
            </div>

    ): (
            <div className="empty">No Music on your list.</div>
        )
    )

};

export default GetAllPerson;


