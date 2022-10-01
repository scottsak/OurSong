import React from "react";

function LyricSection(props) {
    console.log(props.todaysQuote[0]);
    console.log(props.todaysQuote[0].lyrics.split(" "));
    return (
        <div className="lyrics-section">
            {props.todaysQuote[0].lyrics.split(" ").map((val, idx) =>
                <h3 key={idx} className='lyric-words'>{val.toLowerCase()}</h3>

            )}
            <h2>{props.todaysQuote[0].lyrics}</h2>
        </div>
    )
}

export default LyricSection;