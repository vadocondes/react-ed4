
const LogProps = (props) => (
  <p>
    {console.log(props.color)}
    {console.log(props.isActive)}
    {console.log(props.callBack)}
    {console.log(props.numberOfColors)}
    {console.log(props.name)}
  </p>
)
export default LogProps;