import {styles} from './styles.js';

export default function streamComponent(preview, displayName, gameName, viewers, description){
    const splitDescription = description.split('')
    const trunkDescription = splitDescription.length < 80 ? 
    description : 
    splitDescription.slice(0,80).join('').concat('...');
    
    return (
      `<div>
        <div className='streamWrapper' style="${styles.streamWrapper}">
          <img src=${preview} style=${styles.image}>
          <div classname='textContainer' style=${styles.textContainer}>
            <div className='displayName' style='${styles.displayName}'> ${displayName} </div>
            <div className='gameTitle' style='${styles.gameTitle}'> ${gameName} </div>
            <div className='viewerCount'style=${styles.viewerCount}> - ${viewers} viewers</div>
            <div className='description'style='${styles.description}'> ${trunkDescription}</div>
          </div>
        </div>
      </div>`
    );
  }