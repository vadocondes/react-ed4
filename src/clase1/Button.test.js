import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

test('Should render without errors', () => {
  render(<Button></Button>)
})

test('Should match snapshot', () => {
  render(<Button></Button>);
  expect(screen.getByRole('button')).toMatchSnapshot();
})

test('Should render certain text', () => {
  render(<Button>Mi botón</Button>);
  expect(screen.getByRole('button').textContent).toBe('Mi botón');
})

test('Should execute onClick function', () => {
  const fn = jest.fn();
  render(<Button onClick={fn}>Click me</Button>);
  expect(fn).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole('button'));
  expect(fn).toHaveBeenCalled();
})