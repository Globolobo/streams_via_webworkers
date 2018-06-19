import streamComponent from './streamComponent';

export default function streamListFn (streams, html = ''){
  if (!streams.length){
    return html;
  }
  const curr = streams[0];
  const {preview, game, viewers, channel} = curr;
  const {display_name, status} = channel;

  const streamHtml = streamComponent(preview.small, display_name, game, viewers, status);
  const newHtml = `${html} ${streamHtml}`; 

  return streamListFn(streams.slice(1), newHtml)
}