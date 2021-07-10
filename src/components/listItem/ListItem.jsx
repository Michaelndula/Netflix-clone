import './listItem.scss'
import React, { useState } from 'react';
import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

function ListItem({index}) {
  const [isHovered,setIsHovered] = useState(false)
  const trailer = "https://player.vimeo.com/external/327516559.sd.mp4?s=49c45de326d84e2251ba8e5400806f437acbd71e&profile_id=164&oauth2_token_id=57447761"
  return (
    <div 
    className="listItem" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://scrapsfromtheloft.com/wp-content/uploads/2021/02/Snowpiercer-Season-2-TNT-Original-e1612897339736.jpeg" alt=""/>
      {isHovered && (
<>
    <video src={trailer} autoPlay={true} loop/>
    <div className="itemInfo">
    <div className="icons">
      <PlayArrow className="icon"/>
      <Add className="icon"/>
      <ThumbUpAltOutlined className="icon"/>
      <ThumbDownOutlined className="icon"/>
    </div>
    <div className="itemInfoTop">
      <span>1 hour 14 mins</span>
      <span className="limit">+16</span>
      <span>1999</span>
    </div>
    <div className="desc">
      Loremipum loremipum  Loremipum Loremipum
    </div>
    <div className="genre">Action</div>
  </div>
  </>
      )}
    
  </div>
  
  );
}

export default ListItem;
