import React from "react";
import ReactDOM from "react-dom/client";

//JSX
//JSX=> React.ceateElement=> ReactElement- JS Object => HTMLElement(render)
const jsxHeading = <h1>Namste react using JSX</h1>;
// jsx code transpiled before it reaches the JS Engine. Parcel is transpiling the code.
//  parcel gives it to Babel package to do it. Babel is a JavaScript compiler

//React Component
//class based component - old way to write code
//functional component - new way
//React Functional Component that rerurns jsx code/ react element
const HeadingComponent = () => {
  return (
    <div>
      {" "}
      <h1>Namste React Functional Component</h1>
      {/* <TitleComponent /> same as {TitleComponent(), <TitleComponent></TitleComponent>}*/}
      {spanElem}
      {title}
    </div>
  );
};
const spanElem = <spna>span element</spna>;
const title = (
  <div>
    <h1>its a title</h1>
    <h2>h2 title</h2>
  </div>
);
const TitleComponent = () => {
  return <h1>Namste React Title Functional Component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
//root.render(<HeadingComponent />);
root.render(title);
