import { Route, Switch } from "react-router-dom";
import ShopNavbar from "./components/ShopNavbar";
import DogBoard from "./components/DogBoard";
import RegisterDog from "./components/RegisterDog"
import DogDetail from "./components/DogDetail";
import { Container } from "react-bootstrap";
import AdoptDog from "./components/AdoptDog";

// import { modalContext } from "./context/modalContext"

function App() {
  // const { id, show, showModal, hideModal } = useContext(modalContext)
  return (
    <Container>
      <ShopNavbar />
      <Switch>
        <Route exact path="/dogs" component={DogBoard} />
        <Route exact path="/dogs/:id" component={DogDetail} />
        <Route exact path="/offer" component={RegisterDog} />
        <Route exact path="/adopt" component={AdoptDog} />
        <Route exact path="/adopt/:id/:name" component={AdoptDog} />
        {/* <Route exact path="/" component={DogBoard} showModal={showModal} /> */}
      </Switch>
      {/* <DogDetail show={show} hideModal={hideModal}/> */}
    </Container>
  );
}

export default App;
