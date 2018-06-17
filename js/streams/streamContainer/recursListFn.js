import streamComponent from './streamComponent';

export default function streamListFn (streams, html = ''){
  if (!streams.length){
    return html;
  }
  const curr = streams[0];
  const {preview, game, viewers, channel} = curr;

  const streamHtml = streamComponent(preview.small, game, viewers, channel.status);
  const newHtml = `${html} ${streamHtml}`; 

  return streamListFn(streams.slice(1), newHtml)
}