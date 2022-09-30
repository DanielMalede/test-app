import "./children.css";
import {React} from "react";
function Children() {
  // const c = console.log
  // someFun(){
  //   c()
  // }
  return (
    <div className="children">
      <section>
        <span data-testid="MySpan" className="newClass">
          Hello Children
        </span>
        <br />
        <button data-testid="myButton" className="btn-style">
          Click Here
        </button>
        <label For="myInput"></label>
        <input type="text" name="myInput" data-testid="userInput" className="inputClass" />
      </section>
    </div>
  );
}

export default Children;
