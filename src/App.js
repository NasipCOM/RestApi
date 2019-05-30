import React from "react";
import Get from "./components/Get";
import Post from "./components/Post";
import Delete from "./components/Delete";

function App() {
    return (
        <div className="App">
            <Post/>
            <Get/>
            <Delete/>
        </div>
    );
}

export default App;
