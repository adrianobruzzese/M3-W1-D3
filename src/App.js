import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container, Row } from "react-bootstrap";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Fantasy from "./books/fantasy.json";
import MyFooter from "./components/MyFooter";

function App() {

  return (
    <div className="App">
      <MyNav brand="EpiBooks" claim="React Lesson 04" />
      <Welcome />
{}
      <Container>
        <Row className="justify-content-md-center p-auto">
          <BookList books={Fantasy} />
        </Row> {}
      </Container>
      <MyFooter
        content1={
          <ul>
            <li>Policy</li>
            <li>Termini di servizio</li>
            <li>Contatti</li>
          </ul>
        }
        content2={
          <ul>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
          </ul>
        }
        content3={
          <ul>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;
