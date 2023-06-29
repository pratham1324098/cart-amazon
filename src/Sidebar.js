import React from 'react'
import './Sidebar.css'
import Home from './Home.js'
// import { Link,Router,Route,Routes } from 'react-router-dom';
import { useDataLayerValue } from './DataLayer';
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function Sidebar({handleChangePlaylist}) {
  const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className="sidebar">
      <img className="sidebar_logo"
       src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
      alt="" />
      
        <SidebarOption Icon={HomeIcon} title="Home"/>
      
      
      
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
      <br/>
      <div className="playlist">
      <AddBoxIcon/>
      <strong className="sidebar_title">CREATE PLAYLISTS</strong>
      </div>
      <br />
      <div className="liked">
      <FavoriteIcon/>
      <strong className="sidebar_title">LIKED SONGS</strong>
      </div>
      <hr />
      {playlists?.items?.map((playlist)=>(
        <SidebarOption title={playlist.name}/>
      ))}

    </div>
  )
}

export default Sidebar
