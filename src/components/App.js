import MakePost from './MakePost';
import Nav from './Nav';
import Chirps from './Chirps';
const { Component } = require("react");


class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <MakePost />
        <Chirps />
      </div>
    );
  }
}

export default App;