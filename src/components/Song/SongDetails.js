import React from 'react';

const SongDetails = ({song}) => {
    return (
        <li>
            <div className="song-details">
                <div className="song">
                    <h3>{song.name}</h3>
                    <p>{song}</p>
                </div>
            </div>
        </li>
    );
}

export default PersonDetails;