import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe('App component', () => {
    it('render App component', () => {
        render(<App />)
        expect(screen.getByText('Hello World!')).toBeInTheDocument()
        expect(screen.getByText(/Doggy Directory/i)).toBeInTheDocument();
    })

    describe('App component', () => {
        test('render App component', () => {
            render(<App />)
            expect(screen.getByRole("textbox")).toBeInTheDocument();
            expect(screen.getByRole("button")).toBeInTheDocument();
        })
    }


})

  test('types in the input field', () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'poodle');
    expect(screen.getByRole('textbox')).toHaveValue('poodle');
  });


test('clicks the search button', async () => {
    render(<App />);
    userEvent.type(screen.getByRole('textbox'), 'poodle');
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
  });