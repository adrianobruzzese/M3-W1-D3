import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  whenSelected() {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  }
  render() {
    const { book } = this.props;
    const { selected } = this.state;

    if (selected) {
      return (
        <Col sm={12} md={6} lg={3}>
          <Card
            key={book.asin}
            style={{
              height: "800px",
              width: "270px",
              margin: "auto",
              marginBottom: "1rem",
              border: "2px solid red",
            }}
          >
            <Card.Img
              variant="top"
              src={book.img}
              alt="Book Cover"
              className="img-contain"
              style={{
                height: "22rem",
                border: "2px solid grainsboro",
              }}
            />
            <Card.Body>
              <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {book.title}
              </Card.Title>
              <Card.Text>- {book.price}</Card.Text>
              <Button variant="primary" onClick={() => this.whenSelected()}>
                Select
              </Button>
              <CommentArea bookId={book.asin} />
            </Card.Body>
          </Card>
        </Col>
      );
    } else {
      return (
        <Col sm={12} md={6} lg={3}>
          <Card
            key={book.asin}
            style={{
              height: "500px",
              width: "270px",
              margin: "auto",
              marginBottom: "1rem",
              border: "2px solid rgba(0, 0, 0, 0.175)",
            }}
          >
            <Card.Img
              variant="top"
              src={book.img}
              alt="Book Cover"
              className="img-contain"
              style={{
                height: "22rem",
                border: "2px solid grainsboro",
              }}
            />
            <Card.Body>
              <Card.Title style={{ whiteSpace: "nowarp", overflow: "hidden", textOverflow: "ellipsis" }}>
                {book.title}
              </Card.Title>
              <Card.Text>- {book.price}</Card.Text>
              <Button variant="primary" onClick={() => this.setState({ selected: !this.state.selected })}>
                Select
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    }
  }
}

export default SingleBook;
