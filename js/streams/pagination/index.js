import store from '../../store';

export default function pagination (){
    const currQuery = store.get('currQuery')
    console.log('currQuery', currQuery)
    const currQueryMap = store.get(currQuery);
    const currTotal = currQueryMap.get('total');
    console.log('currTotal', currTotal)

    const show = currTotal > 5 ? true : false;
    const prev = `<i onclick="${prevClickFn()}" class="fa fa-chevron-left" aria-hidden="true"/>`;
    //const next = `<i onClick="${nextClickFn()}" class="fa fa-chevron-right" aria-hidden="true"/>`;
    
    document.getElementById('paginationWrapper').innerHTML = show ? 
    `${prev} ${currPage} / ${currTotal/5} ${next}` : null;
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