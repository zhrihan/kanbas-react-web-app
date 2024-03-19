import React from "react"; 
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./String StateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }    
  return(
    <div>
      <h1>Assignment 4</h1>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>
    </div>
  );
};
export default Assignment4;