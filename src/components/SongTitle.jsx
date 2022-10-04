import React from "react";
import Autocomplete from "./Autocomplete";
import taylorSongs from "../taylorSongs";

function SongTitle(props) {
    console.log(props.todaysQuote)
    const suggestions = taylorSongs;
    // makes the hints anonymous 
    const MakeAnonymous = (item) => {
        let t = "";

        if (typeof (item) != 'string') {
            item = item.toString();
        }
        for (let i = 0; i < item.length; i++) {
            if (item.charAt(i).match(/^[0-9a-zA-Z]+$/)) {
                t += "x";
            }
            else {
                t += item.charAt(i);
            }
        }
        return t
    }

    // let win = "won";
    return (
        <div>
            
            {/* <h2 className="song-title">{props.todaysQuote[0].song.toLowerCase()}</h2> */}
            <div className="title-section">{props.win === 'won' || props.win === 'lost' ? <h1 className="song-title">{props.todaysQuote[0].song.toLowerCase()}</h1> : <Autocomplete suggestions={suggestions} win={props.win} setWin = {props.setWin} song={props.todaysQuote[0].song.toLowerCase()}/>}</div>
        </div>
    )
}

export default SongTitle;