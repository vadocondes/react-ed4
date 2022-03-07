import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('Should render without errors', () => {
  render(<Greeting></Greeting>)
})

test('Should match snapshot' , () => {
  render(<Greeting></Greeting>);
  expect(screen.getByRole('heading')).toMatchSnapshot();
})

test('Should render certain text', () => {
  render(<Greeting text="Hola"></Greeting>);
    expect(screen.getByRole('heading', {level: 1})).toBeDefined();
    expect(screen.getByText('Este es mi primer componente!, Hola')).toBeDefined();
})