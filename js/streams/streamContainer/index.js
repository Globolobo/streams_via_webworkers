import streamListFn from './recursListFn';
import store from '../../store';

export default function builtStreamObjHtml (){
    //const sendStreamsToWebWorkers
    const currPage = store.get('currPageNum')
    const currQuery = store.get('currQuery');
    const currQueryMap = store.get(currQuery);
    
    const currStreamArr = currQueryMap.get(currPage);
    console.log('hereeee', currStreamArr)

    document.getElementById('streamContainer').innerHTML = currStreamArr.length ? 
    streamListFn(currStreamArr) : 'No results, try a different query';
  };