import requestObj from './request/request';
import builtStreamObjHtml from './streams/streamContainer/index';
import pagination from './streams/pagination';
import store from './store';

document.getElementById('searchForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const query = e.target[0].value;
    
    store.set('currQuery', query);
    
    if(!store.has(query)){
      const storeBool = await requestObj(query);
      if(!storeBool){
        return alert('Issue with Store');
      }
    }

    const currStreamKey = store.get('currQuery');
    const currQueryMap = store.get(currStreamKey);
    const currQueryTotal = currQueryMap.get('total')
    document.getElementById('totalResults').innerHTML = currQueryTotal;

    builtStreamObjHtml(currQueryMap);
    //pagination(store.get(currQuery).get('total'));
  });

