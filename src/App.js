import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Gallery from "./gallery/Gallery";
import SinglePhoto from "./singlePhoto/SinglePhoto";
import Album from "./album/Album";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/photo/:id" component={SinglePhoto} />
          <Route path="/album/:albumId" component={Album} />
        </Switch>
      </Router>
    </div>
  );
}
