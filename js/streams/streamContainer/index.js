import streamListFn from './recursListFn';

export default function builtStreamObjHtml ({streams}){
    const streamHtml = streams.length ? streamListFn(streams) : 'No results, try a different query';
  
    return streamHtml;
  };