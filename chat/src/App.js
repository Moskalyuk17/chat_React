import React from 'react';
import './Scss/index.css';
import Aside from './Componets/Aside';
import Main from './Componets/Main';
import Header from './Componets/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAsideVisible: true,
    };
  }

  closeAside = (event) => {
    this.setState({ isAsideVisible: false });
    event.preventDefault();
  };


  openAside = (event) => {
    this.setState({ isAsideVisible: true });
    event.preventDefault();

  };

  render() {
    return (
      <div className="App">
        {this.state.isAsideVisible && <Aside closeAside={this.closeAside} />}
        <Header openAside={this.openAside} isAsideVisible={this.state.isAsideVisible} />
        <Main />
      </div>
    );
  }
}

export default App;
