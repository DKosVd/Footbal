import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { Leagues } from './Components/Leagues';
import { Teams } from './Components/Teams';

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Row className="main justify-content-md-center align-items-md-center" >
            <Link to="/leagues">
              <Col>Список лиг</Col>
            </Link>
            <Link to="/teams">
              <Col>Список команд</Col>
            </Link>
          </Row>
        </Route>
        <Route path="/leagues">
          <Leagues/>
        </Route>
        <Route path="/teams">
          <Teams/>
        </Route>
      </Switch>
    </Container >
  );
}

export default App;
