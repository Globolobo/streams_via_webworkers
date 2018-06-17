
export default function resultsCount(promisedRes){
    const {_total, streams} = promisedRes;
    const streamCount = streams.length ? _total : 0;  
    return streamCount;
  };

  