import React, { Component, Fragment, useState } from "react";

const Autocomplete = ({ suggestions, win, setWin, song, gamesPlayed, setGamesPlayed }) => {

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");


    const checkAns = (guess) => {
        if (guess.toLowerCase() === song) {
            localStorage.setItem('win', 'won');
            setWin('won');
            let tempWins = JSON.parse(localStorage.getItem('wins'));
            if (!tempWins) {
                tempWins = 0;
            }
            localStorage.setItem('wins', parseInt(tempWins) + 1)
            localStorage.setItem('gamesPlayed', parseInt(JSON.parse(localStorage.getItem('gamesPlayed'))) + 1);
            setGamesPlayed(gamesPlayed + 1)
        }
        else {
            localStorage.setItem('win', 'lost');
            setWin('lost');
            let tempLosses = JSON.parse(localStorage.getItem('losses'));
            if (!tempLosses) {
                tempLosses = 0;
            }
            localStorage.setItem('losses', parseInt(tempLosses) + 1)
            localStorage.setItem('gamesPlayed', parseInt(JSON.parse(localStorage.getItem('gamesPlayed'))) + 1);
            setGamesPlayed(gamesPlayed + 1)
        }
    }

    const onChange = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        checkAns(e.target.innerText);
        setShowSuggestions(false);
    };



    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;

                    // Flag the active suggestion with a 

                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div class="no-suggestions">
                <span role="img" aria-label="tear emoji">
                    😪
                </span>{" "}
                <em>sorry no suggestions</em>
            </div>
        );
    };

    return (
        <>
            {win === 'won' || win === 'lost' ? <div className="lossSpace"></div> : <input
                placeholder={"Guess the song title"}
                type="text"
                onChange={onChange}
                value={input}
                className="guess-section"
            />}

            <div className="autocompleteWrapper">
                <div className="suggestionsWrapper">
                    {showSuggestions && input && <SuggestionsListComponent />}
                </div>
            </div>
        </>
    );
};

export default Autocomplete;