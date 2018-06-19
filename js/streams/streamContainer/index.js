import streamListFn from './recursListFn';

export default function builtStreamObjHtml ({streams}){
    return streams.length ? streamListFn(streams) : 'No results, try a different query';;
  };