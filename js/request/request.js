import requestReducer from './requestReducer';
import store from '../store';

export default function requestObj(query = '') {
  const request = new XMLHttpRequest();
  const currPageNum = store.get('currPageNum');
  const next = store.get('next');
  
  request.addEventListener("progress", ()=>{
    document.getElementById('streamContainer').innerHTML = 'Loading...'; //TODO change to spinner
  });
  
  if(next){
    console.log('next is')
    request.open('GET', store.get('next'))
  }
  else{
    request.open("GET", `https://api.twitch.tv/kraken/search/streams?q=${query}`);
  }

  request.setRequestHeader('Client-ID', '5bekzo1mw7dssm63lojrxkpi251ggw'); //TODO remove client ID
  request.send();

  return new Promise((resolve)=>{
    request.onloadend = (pe) => {
      const response = JSON.parse(request.response)
      const { streams, _total, _links: {
        next }} = response;
      store.set('next', next);
      console.log('next is', response, next)
      resolve(
        requestReducer(streams, _total)
      );
    }
  })
  }