import React, {useEffect, useState} from 'react'
import './App.css'
import Login from './Login'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'
import {handleChangePlaylist} from './SidebarOption'
import Playlists from './Playlists'
const spotify = new SpotifyWebApi();

function App() {
  const [{user,token},dispatch]=useDataLayerValue();
  // const handleChangePlaylist =((title)={

  // })
  useEffect(() => {
    const hash=getTokenFromUrl();
    // console.log("i HAVE A TOKEN",token);
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        console.log("User",user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist(Playlists[0].playlistno).then((response=>{
        {console.log(Playlists[0].playlistno)};
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:response,
        })
      }))


    }
  },[token,dispatch]);

  return (
    <div className='app'>
      
      {
        token?
          <Player spotify={spotify} />
        :
          <Login/>
        
      }
    </div>
  );
}

export default App
