import React, { createContext, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext({});

const StoreContextProvider = (props) => {
    const [allPerson, setAllPerson] = useState([]);
    const [personById, setPersonById] = useState([]);

    const getAllPersonApi = () =>{
        axios.get(`http://localhost:8080/person`
        ).then(allPersonData => {
            setAllPerson(allPersonData.data)
        }).catch(err => console.log(err));
    };

    const getPersonByIdApi = (id) =>{
        console.log(id);
        axios.get(`http://localhost:8080/person/${id}`, id
        ).then(personById => {
            setPersonById(personById.data)
        }).catch(err => console.log(err));
    };

    return (
        <StoreContext.Provider value={{
            getAllPersonApi,
            getPersonByIdApi
        }}>
            {props.children}
        </StoreContext.Provider>
    );

};

export default StoreContextProvider;