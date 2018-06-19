import {styles} from './styles.js';

export default function streamComponent(preview, displayName, gameName, viewers, description){
    console.log('styles are', styles.displayName);
    return (
      `<div>
        <div className='streamWrapper' style="${styles.streamWrapper}">
          <img src=${preview} style=${styles.image}>
          <div classname='textContainer' style=${styles.textContainer}>
            <div className='displayName' style='${styles.displayName}'> ${displayName} </div>
            <div className='gameTitle' style='${styles.gameTitle}'> ${gameName} </div>
            <div className='viewerCount'style=${styles.viewerCount}> - ${viewers} viewers</div>
            <div className='description'style='${styles.description}'> ${description}</div>
          </div>
        </div>
      </div>`
    );
  }