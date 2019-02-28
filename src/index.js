// import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    return <div>
        <label className = "label" for = "name"> Enter name: </label>
        <input id ="name" type = "text" />
        <button style = {{backgroundColor:'blue',  color: 'white'}}>Submit</button> 
    </div>;

};

//take the react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
