import './App.css';
import Hello from './clase1/Hello';
import Greeting from './clase1/Greeting';
import ShowName from './clase1/ShowName';
import ShowDate from './clase1/ShowDate';
import ConditionalRender from './clase1/ConditionalRender';
import ShowMessage from './clase1/showMessage';
import Title from './clase1/Title';
import Text from './clase1/Text';
import List from './clase1/List';
import ListItem from './clase1/ListItem';
import Link from './clase1/Link';
import Loading from './clase1/Loading';
import Button from './clase1/Button';
import LogProps from './clase1/LogProps';

function App() {
  /* return (
    <>
      <Hello></Hello>
      <Greeting text="Hola" />
      <Greeting text="Adiós" />
      <ShowName></ShowName>
      <ShowDate></ShowDate>
      <ShowMessage></ShowMessage>
      <ConditionalRender></ConditionalRender>
    </>
  ); */

  /*   <h1>Necesito partir en componentes todo esto</h1>
  <p>Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:</p>
  <ul>
    <li>Observar el HTML</li>
    <li>Pensar en como puedo extraer cada trozo en componentes</li>
    <li>Usarlos en React</li>
  </ul>
  
  <a href="https://reactjs.org/">React Docs</a> */

  return (
    <>
      <Loading show>
        <Title>
          Necesito partir en componentes todo esto
        </Title>
        <Text message="Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:"></Text>
        <List>
          <ListItem text="Observar el HTML"></ListItem>
          <ListItem text="Pensar en como puedo extraer cada trozo en componentes"></ListItem>
          <ListItem text="Usarlos en React"></ListItem>
        </List>
        <Link to="https://reactjs.org"> React Docs</Link>
        <br></br>
        <Link to="https://reactjs.org" openInNewTab> React Docs in new tab</Link>
      </Loading>

      <Button onClick={() => console.log('holi')} > Mi botón</Button>

      <LogProps 
        color = {['red', 'blue', 'yellow']}
        isActive = { true}
        callBack= { () => console.log('callBack')}
        numberOfColors = {3}
        name = "miNombre"
      >
      </LogProps>

    </>
  )
}

export default App;
