// const heading = React.createElement("h1",{id :"heading"},"Hello World from react!");

// console.log(heading)    // This will return object to me this is not any kind of tag this is a object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);    // Basically this render is help in converting the object into the h1 tag


/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag </h1>
        <h2>I'm h2 tag </h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag </h1>
        <h2>I'm h2 tag </h2>
    </div>
</div>      
    
*/
const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);