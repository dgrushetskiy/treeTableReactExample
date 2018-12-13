import React, { Component } from 'react';
import './App.css';
import TreeTable from "../components/TreeTable";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Шапка</h1>
        <TreeTable/>
      </div>
    );
  }
}

export default App;
