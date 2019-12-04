import React, { useContext, useEffect} from 'react';
import { StoreContext } from '../../context/StoreContext';
import SongDetails from './SongDetails';

const getAllSong = () => {


    const {allSong, getAllSongApi} = useContext(StoreContext);

    useEffect(() => {
        getAllSongApi();
    }, []);

    return(
        allSong.length ?(
            <div className="person-list">
                <ul>
                    {allSong.map((person) =>
                    {
                        return (<SongDetails person={person} key={allSong.id}/>);
                    })
                    }
                </ul>
            </div>

        ): (
            <div className="empty">No Song on your list.</div>
        )
    )

};

export default getAllSong;


