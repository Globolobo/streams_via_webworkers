import resultsCount from './streams/resultsCount';
import requestObj from './request/request';
import builtStreamObjHtml from './streams/streamContainer/index';
import pagination from './streams/pagination';

document.getElementById('searchForm').addEventListener('submit', async function(e){
    e.preventDefault();
    
    const query = e.target[0].value;
    const promisedRes = await requestObj(query);
    
    document.getElementById('totalResults').innerHTML = resultsCount(promisedRes);
    document.getElementById('streamContainer').innerHTML = builtStreamObjHtml(promisedRes);
    document.getElementById('paginationWrapper').innerHTML = pagination(promisedRes);
  })
  