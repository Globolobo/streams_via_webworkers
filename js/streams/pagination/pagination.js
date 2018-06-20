import store from '../../store';
import builtStreamObjHtml from '../streamContainer/index';
import requestObj from '../../request/request';

export default function paginationFn(){
    const currQuery = store.get('currQuery');
    const currPageNum = store.get('currPageNum');
    const currQueryMap = store.get(currQuery);
    const currTotal = currQueryMap.get('total');
    const show = currTotal > 5 ? true : false;

    const prev = `<button id="prev" class="fa fa-chevron-left" aria-hidden="true"></button>`;
    const next = `<button id="next" class="fa fa-chevron-right" aria-hidden="true"></button>`;
    
    const pageNums = `<span>${currPageNum} / ${Math.ceil(currTotal/5)}</span>`;

    document.getElementById('paginationWrapper').innerHTML = show ? 
    `${prev} ${pageNums} ${next}` : null;

    document.getElementById('prev').addEventListener('click', prevClickFn);
    document.getElementById('next').addEventListener('click', nextClickFn);
}
function prevClickFn(e){
    const currPageNum = store.get('currPageNum');

    if(currPageNum === 1){
        return;
    }
        store.set('currPageNum', currPageNum-1);
        
        builtStreamObjHtml();
        paginationFn();
}

function nextClickFn(){
    const currPageNum = store.get('currPageNum'); 
    store.set('currPageNum', currPageNum+1);
    
    if(currPageNum % 2 != 0){
        builtStreamObjHtml();
        paginationFn();
    }    
    else{
        requestObj().then(()=>{
            builtStreamObjHtml();
            paginationFn(); 
        })
    }
}