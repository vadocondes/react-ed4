
const ConditionalRender = ({show, children}) => (
  <>
    {show ? children : 'Loading'}
  </>
)

export default ConditionalRender;