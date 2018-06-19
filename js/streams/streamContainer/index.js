import streamListFn from './recursListFn';

export default function builtStreamObjHtml ({streams}){
    //const sendStreamsToWebWorkers
    
    return streams.length ? streamListFn(streams.slice(0,5)) : 'No results, try a different query';;
  };