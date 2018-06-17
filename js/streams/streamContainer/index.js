import streamListFn from './recursListFn';

export default function builtStreamObjHtml (promisedRes){
    const {streams, _total} = promisedRes;
    const streamHtml = streams.length ? streamListFn(streams) : 'No results, try a different query';
  
    return streamHtml;
  };