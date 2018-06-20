import requestObj from './request/request';
import builtStreamObjHtml from './streams/streamContainer/index';
import store from './store';
import paginationFn from './streams/pagination/pagination';

document.getElementById('searchForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const query = e.target[0].value;
    
    store.set('currQuery', query);
    
      const res = store.has(query) ? true : requestObj(query);
      if(!res){
        return alert('Issue with Store');
      }
      res.then(()=>{
      paginationFn();    
      builtStreamObjHtml();
      const currStreamKey = store.get('currQuery');
      const currQueryMap = store.get(currStreamKey);
      const currQueryTotal = currQueryMap.get('total')
      document.getElementById('totalResults').innerHTML = currQueryTotal; 
    })

    
    
  });

