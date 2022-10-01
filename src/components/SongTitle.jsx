import React from "react";

function SongTitle(props) {
    console.log(props.todaysQuote)
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
    return (
        <div>
            {/* <h2 className="song-title">{props.todaysQuote[0].song.toLowerCase()}</h2> */}
            <div>{props.guessesAmount > 1 || props.win === 'won' ? <h1 className="song-title">Release Date: {props.todaysQuote[0].song.toLowerCase()}</h1> : <h1 className='song-title'>{MakeAnonymous(props.todaysQuote[0].song.toLowerCase())}</h1>}</div>
        </div>
    )
}

export default SongTitle;