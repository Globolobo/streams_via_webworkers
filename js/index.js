import requestObj from './request/request';
import pagination from './streams/pagination/index';
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
    pagination();

    const currStreamKey = store.get('currQuery');
    const currQueryMap = store.get(currStreamKey);
    const currQueryTotal = currQueryMap.get('total')
    document.getElementById('totalResults').innerHTML = currQueryTotal;

  });

