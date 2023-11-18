import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

 
   
   
   
    
       
   
  const AppLayout= ()=>
  {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
  };
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>)
















//React.createElement==>object ==>on rendering==>convert to HTML Element

// const heading= React.createElement("h1",{id:"heading"},"namaste react🚀")

// const jsxHeading=<h1 id="heading">Namaste react🚀 using jsx</h1>
// const jsxHeading= (<h1 className="head" tabIndex="1">Namaste react🚀</h1>)

// const heading= React.createElement("h1",{id:"heading"},"hello world from react");

// const parent= React.createElement("div",{id:"parent"},
//         [React.createElement("div",{id:"child1"},
//         [React.createElement("h1",{id:"child"},"Namaste React🚀"),
//         React.createElement("h2",{id:"h2"},"i am h2")
//         ]),
//         React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{id:"child"},"I am h1"),  //This syntax make things complex and code is ugly
//         React.createElement("h2",{id:"h2"},"i am h2")    //This is core react
//         ])]
//             );

//     //JSX will help us


// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);