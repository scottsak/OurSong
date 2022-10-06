import React, { useState } from 'react';
import Axios from 'axios';


import AlbumCover from './AlbumCover';
import Header from './Header';
import SongTitle from './SongTitle';
import LyricSection from './LyricSection';


function App() {

  // gets the date information for starting information 
  const today = new Date();
  const todaysDate = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  const lastDayPlayed = localStorage.getItem('day');

  // checks last day played 
  if (lastDayPlayed !== todaysDate) {
    localStorage.setItem('day', todaysDate);
    localStorage.setItem('win', 'waiting');
  }

  const savedQuote = [{ dayCount: "", song: "", album: "", date: "", lyrics: "" }];
  const [todaysQuote, setTodaysQuote] = useState(savedQuote);

  // gets info for stats 
  let startGamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed'));
  if (startGamesPlayed === null) {
    startGamesPlayed = 0;
    localStorage.setItem('gamesPlayed', 0);
  }
  const [gamesPlayed, setGamesPlayed] = useState(parseInt(startGamesPlayed))

  let startWin = localStorage.getItem('win');
  if (startWin === null) {
    startWin = 'waiting';
    localStorage.setItem('win', 'waiting');
  }

  const [win, setWin] = useState(startWin);

  let startLosses = JSON.parse(localStorage.getItem('losses'));
  if (!startLosses) {
    localStorage.setItem('losses', 0)
  }

  let startWins = JSON.parse(localStorage.getItem('wins'));
  if (!startWins) {
    localStorage.setItem('wins', 0)
  }

  if (todaysQuote[0].dayCount === "") {
    getInfoforMovie();
  }



  function getInfoforMovie() {
    // Axios.get("https://swiftiegame.herokuapp.com/get_taylor_quote", {
    Axios.get("http://localhost:3001/get_taylor_quote", {
      params: {
        todaysDate: (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
      }
    })
      .then((res) => {
        setTodaysQuote([{
          dayCount: res.data[0].dayCount,
          song: res.data[0].song,
          album: res.data[0].album,
          date: res.data[0].todaysDate,
          lyrics: res.data[0].lyrics
        }])
      })
  }


  return (
    <div className="App">
      <Header />
      <AlbumCover
        todaysQuote={todaysQuote}
        win={win}
      />

      <div className='spacer'></div>
      <SongTitle
        todaysQuote={todaysQuote}
        win={win}
        setWin={setWin}
        gamesPlayed={gamesPlayed}
        setGamesPlayed={setGamesPlayed}
      />
      <div className='spacer'></div>
      <LyricSection
        todaysQuote={todaysQuote}
      />
    </div>
  );
}

export default App;
