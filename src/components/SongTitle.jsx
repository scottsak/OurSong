import React from "react";
import Autocomplete from "./Autocomplete";
import taylorSongs from "../taylorSongs";

function SongTitle(props) {
    const suggestions = taylorSongs;

    return (
        <div>
            <div className="title-section">{props.win === 'won' || props.win === 'lost' ? <h1 className="song-title">{props.todaysQuote[0].song.toLowerCase()}</h1> : <Autocomplete suggestions={suggestions} win={props.win} setWin = {props.setWin} song={props.todaysQuote[0].song.toLowerCase()} gamesPlayed={props.gamesPlayed} setGamesPlayed={props.setGamesPlayed}/>}</div>
        </div>
    )
}

export default SongTitle;