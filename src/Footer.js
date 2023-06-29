import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import AlbumIcon from '@mui/icons-material/Album';
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" 
        src="https://c.saavncdn.com/264/Ranjha-From-Shershaah--Hindi-2021-20210804173407-500x500.jpg" alt="" />
        <div className="footer_songInfo">
          <h4>Ranjha</h4>
          <p>Shershah</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green"/>
        <SkipPreviousIcon className="footer_icon"/>
        <PlayCircleOutlineIcon fontSize='large' className="footer_icon"/>
        <SkipNextIcon className="footer_icon"/>
        <RepeatIcon className="footer_green"/>
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
