import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";

const Autocomplete = ({ suggestions, win, setWin, song }) => {
    const [input, setInput] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const checkAns = (guess) => {
        if (guess.toLowerCase() === song) {
            setWin('won');
        }
        else {
            setWin('lost');
        }
    }

    const onChange = (e) => {

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestion = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        console.log(filteredSuggestion)

        setFilteredSuggestions(filteredSuggestion);
        // Filter our suggestions that don't contain the user's input
        setInput(e.target.value);
        setShowSuggestions(true);
    };

    const onClick = (e, key) => {
        setFilteredSuggestions([]);
        setInput("");
        checkAns(e.target.innerText);
    };



    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;

                    return (
                        <li className={className} key={suggestion} onClick={event => onClick(event, suggestion)}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className="no-suggestions">
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
}


export default Autocomplete;
