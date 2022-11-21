import React from "react";
import Graph from "./Graph";

const Stats = ({ wpm, accuracy, graphData, correctChars, incorrectChars,missedChars, extraChars }) => {
  //   var removeDuplicateWords = new Set();
  //   const newGraph = graphData.filter((i)=>{
  //       if(!removeDuplicateWords.has[i[0]]){
  //           removeDuplicateWords.add(i[0]);
  //           return i;
  //       }
  //   })
  var timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if (!timeSet.has[i[0]]) {
      timeSet.add(i[0]);
      return i;
    }
  });
  
  return (
    <div className="stats-box">
      <div className="left-stats">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy}</div>
        <div className="title">Characters</div>
        <div className="subtitle" style={{'display':'block'}}>
        <div>CorrectChars:{correctChars}</div>
        <div>  IncorrectChars:{incorrectChars}</div>
        <div>   MissedChars:{missedChars}</div>
          <div>  ExtraChars{extraChars}</div>
        </div>
      </div>
      <div className="right-stats">
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;
