export default function streamComponent(preview, gameName, viewers, description){
    return (
      `<img src=${preview} height="42" width="42">
      <div className='gameTitle'> ${gameName} </div>
      <div className='viewerCount'> ${viewers} </div>
      <div className='description'> ${description}</div>`
    );
  }