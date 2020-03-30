import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import About from './About';

const App = () => {
  return(
      <div>
        <Header/>
        <About/>
        <h1>This is a React App</h1>
        <h2>This is a Heading</h2>
        
      </div>
  )

}
ReactDOM.render(<App/>, document.getElementById('root'));

