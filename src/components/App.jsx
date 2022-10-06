import React, { useState } from 'react';
import Axios from 'axios';


import AlbumCover from './AlbumCover';
import Header from './Header';
import SongTitle from './SongTitle';
import LyricSection from './LyricSection';


function App() {

  const today = new Date();
  const savedQuote = [{dayCount : "", song: "", album:"", date:"", lyrics:""}];
  const [todaysQuote, setTodaysQuote] = useState(savedQuote);
  const [win, setWin] = useState('waiting')
  // console.log(todaysQuote);

  if(todaysQuote[0].dayCount === ""){
    getInfoforMovie();
    console.log(todaysQuote);
  }



  function getInfoforMovie() {
    // Axios.get("https://reegle-server.herokuapp.com/get_movie_info", {
    Axios.get("http://localhost:3001/get_taylor_quote", {
      params: {
        todaysDate: (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
      }
    })
      .then((res) => {
        // console.log(res);
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
        todaysQuote = {todaysQuote}
        win = {win}
      />
      
      <div className='spacer'></div>
      <SongTitle 
        todaysQuote = {todaysQuote}
        win = {win}
        setWin = {setWin}
      />
      <div className='spacer'></div>
      <LyricSection 
        todaysQuote = {todaysQuote}
      />
    </div>
  );
}

export default App;
