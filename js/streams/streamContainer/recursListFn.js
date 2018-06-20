import streamComponent from './streamComponent';
import store from '../../store';

export default function streamListFn (streams, html = ''){
  if (!streams.length){
    return html;
  }
  const curr = streams[0];
  const {preview, game, viewers, channel} = curr;
  const {display_name, status} = channel;
  
  if(!store.has(display_name)){
    store.set(display_name, streamComponent(preview.small, display_name, game, viewers, status));
  }  

  const streamHtml = store.get(display_name);
  const newHtml = `${html} ${streamHtml}`;

  return streamListFn(streams.slice(1), newHtml)
}