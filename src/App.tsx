
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './assets/hooks/useStore';
import { Container, Row, Col } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants';
//1. create a initialState
  

function App (){
  const { fromLanguage, toLanguage, interchangeLanguages} = useStore()
  return (
    //3. use hook useReducer
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
        <h2>From</h2>
        {fromLanguage}
        </Col>

        <Col>
        <button disable={fromLanguage === AUTO_LANGUAGE}onClick={interchangeLanguages}>
          intercambiar
        </button>
        </Col>

        <Col>
        <h2>To</h2>
        {toLanguage}
        </Col>
      </Row>
    
    </Container>
  )
  }
export default App
