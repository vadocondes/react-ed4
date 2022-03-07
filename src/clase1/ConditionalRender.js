import Greeting from './Greeting';
import ShowDate from './ShowDate'

const show = true;

const ConditionalRender = () => (
  <>
    <h1>La Magia</h1>
    {show ? 'aaaa' : <ShowDate></ShowDate>}
  </>
)

export default ConditionalRender;