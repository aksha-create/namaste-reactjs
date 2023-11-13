// const heading= React.createElement("h1",{id:"heading"},"hello world from react");
const parent= React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{id:"child"},"I am h1"),
        React.createElement("h2",{id:"h2"},"i am h2")
        ]),
        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{id:"child"},"I am h1"),  //This syntax make things complex and code is ugly
        React.createElement("h2",{id:"h2"},"i am h2")    //This is core react
        ])]
            );

    //JSX will help us


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);