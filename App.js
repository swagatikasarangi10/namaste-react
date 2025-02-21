// ReactElement(object) => HTML(browser understands
{
  /* <div id="parent">
    <div id="child">
        <h1> i am a h1 tag</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am a h1 tag"),
    React.createElement("h1", {}, "i am a h2 tag"),
  ])
);
console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
//heading is the react element and a javascript object
//   <!-- React need a root element to interact with DOM -->
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // it will replace inside  root//render is converting it to h1 tag and put it in browser
