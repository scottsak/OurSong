import React, {useState} from "react";
import Pixelify from "./Pixelify";

function AlbumCover(props){
    // console.log(props.todaysQuote);

    function getAlbumCover(){
        if(props.todaysQuote[0].album === "1989"){
            return "../../taylor-album-covers/1989-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Evermore"){
            return "../../taylor-album-covers/evermore-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Fearless"){
            return "../../taylor-album-covers/fearless-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Folklore"){
            return "../../taylor-album-covers/folklore-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Lover"){
            return "../../taylor-album-covers/lover-album.jpeg";
        }
        else if(props.todaysQuote[0].album === "Red"){
            return "../../taylor-album-covers/red-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Reputation"){
            return "../../taylor-album-covers/reputation-album.jpeg";
        }
        else if(props.todaysQuote[0].album === "Speak Now"){
            return "../../taylor-album-covers/speak-now-album.jpg";
        }
        else if(props.todaysQuote[0].album === "Taylor Swift"){
            return "../../taylor-album-covers/taylor-swift-album.jpeg";
        }
    }

    return(
        <div className="album-cover-section">
        {/* <img className="album-cover-image" src="../../taylor-album-covers/red-album.jpg" alt="red album" /> */}
        {/* public/taylor-album-covers/taylor-swift-album.jpeg */}
        <Pixelify
                src={getAlbumCover()}
                pixelSize={150}
                width={500}
                height={500}
            />
        </div>
    )
}

export default AlbumCover;