//import memoizedMap from 'wherever';

export default function pagination (){
    const currQuery = store.get('currQuery')
    const currTotal = store.get(currQuery).get(total);

    const show = _total > 5 ? true : false;
    const prev = `<div id="backArrow" onclick="${prevClickFn()}" style=""> </div>`;
    const next = `<div id="nextArrow" onClick="${nextClickFn()}" style=""></div> `;

    document.getElementById('paginationWrapper').innerHTML = show ? 
    `${prev} ${currPage} / ${_total/5} ${next}` : null;
  };

const prevClickFn = () =>{
    const currPageNum = store.get('currPageNum');
    store.set('currPageNum', currPageNum+1);

    if(currPageNum === 0){
        e.preventDefault();
        return;
    }
    builtStreamObjHtml();
    pagination();
}