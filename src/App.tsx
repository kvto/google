
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
//1. create a initialState
  

function App (){
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()
  return (
    //3. use hook useReducer
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
        <LanguageSelector 
        type='from'
        value={fromLanguage}
        onChange={setFromLanguage}/>
        </Col>

        <Col>
        <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE}onClick={interchangeLanguages}>
          <ArrowsIcon />
        </Button>
        </Col>

        <Col>
        <LanguageSelector 
        type='to'
        value={toLanguage}
        onChange={setToLanguage}/>
        </Col>
      </Row>
    
    </Container>
  )
  }
export default App
