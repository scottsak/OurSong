import React from "react";

function LyricSection(props) {
    return (
        <div className="lyrics-section">
            <h2>{props.todaysQuote[0].lyrics}</h2>
        </div>
    )
}

export default LyricSection;