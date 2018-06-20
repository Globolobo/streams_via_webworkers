import requestReducer from './requestReducer';

export default function requestObj(query = '') {
    const request = new XMLHttpRequest();
  
    request.addEventListener("progress", ()=>{
      document.getElementById('streamContainer').innerHTML = 'Loading...'; //TODO change to spinner
    });
    // request.addEventListener("load", transferComplete);
    // request.addEventListener("error", transferFailed);
    // request.addEventListener("abort", transferCanceled);
  
      request.open("GET", `https://api.twitch.tv/kraken/search/streams?q=${query}`);
      request.setRequestHeader('Client-ID', '5bekzo1mw7dssm63lojrxkpi251ggw'); //TODO remove client ID
      request.send();
    
      return new Promise((resolve)=>{
        request.onloadend = (pe) => {
          const { streams, _total } = JSON.parse(request.response);
          
          resolve(
            requestReducer(streams, _total)
          );
        }
      })
  }