export default function pagination ({_total}){
    const show = _total > 5 ? true : false;
    const prev = `<div id="backArrow" onclick="${prev()}" style=""> </div>`;

    return show ? `1 / ${_total/5} ` : null;
  };