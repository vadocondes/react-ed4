
const ConditionalRender = ({show, children}) => (
  <>
    {show ? 'Loading...' : {...children}}
  </>
)

export default ConditionalRender;