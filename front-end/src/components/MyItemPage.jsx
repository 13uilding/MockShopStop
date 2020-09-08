import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchCurrent } from '../features/search/searchSlice';
import { Jumbotron, Row, Col, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Card } from 'reactstrap';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../features/counter/counterSlice';
import styles from '../features/counter/Counter.module.css';
import { Counter } from '../features/counter/Counter';

// CounterSlice comes from react-redux tutorial page
// https://redux.js.org/introduction/installation

const MyItemPage = (props) => {
  const currentSearch = useSelector(selectSearchCurrent);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('0');

  const filler = {
    description: 'fill with item later',
    image: `http://placekitten.com/g/500/300`,
  };

  // Need to create cart in the global state

  return ( 
    <div>
      <Jumbotron>
        <h1 className="display-3">{currentSearch}</h1>
        <p className="lead">{`Description: ${filler.description}`}</p>
        <Row className="justify-content-md-center">
          <Col md="6" sm="8">
            <Card>
              <CardBody>
                <CardTitle>{currentSearch}</CardTitle>
              </CardBody>
              <CardBody className='justify-content-md-center'>
                <img width="auto" src={filler.image} alt="Card image cap" />
              </CardBody>
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Jumbotron>
    </div>
  )
}

export default MyItemPage;