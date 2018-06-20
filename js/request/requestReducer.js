import store from './store';
export default function requestReducer(streams, total){

    if(streams.length){
      const firstSet = streams.slice(0,5); 
      const nextSet = streams.slice(5);

      const currPageNum = store.get('currPageNum');
      const query = store.get('currQuery');
      
      store.set(query, new Map(
        [
          [currPageNum, firstSet], 
          [currPageNum+1, nextSet],
          ['total', total]
        ])
      );
        return true;
    }
    return false;
}
