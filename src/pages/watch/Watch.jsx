import "./watch.scss"
import React from 'react'
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
          <ArrowBackOutlined/>
          Home
      </div>
      <video className="video" autoPlay progress controls src="https://player.vimeo.com/external/343728044.sd.mp4?s=35f7d78c97b0997c6226cc34c7768eb86d61fbde&profile_id=139&oauth2_token_id=57447761"/>
    </div>
  )
}

export default Watch
