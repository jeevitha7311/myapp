import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';

describe('Login Component', () => {

  test('renders Login header and input fields', () => {
    render(<Login/>);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
 
  test('checking email & password inputs are empty', () => {
    render(<Login/>)
    expect(screen.getByPlaceholderText("Email")).toHaveValue("");
    expect(screen.getByPlaceholderText("Password")).toHaveValue("");
  })
  test('updates email and password inputs', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'abc123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('abc123');
  });

  test('shows "Loading..." message after clicking Sign In', () => {
    render(<Login />);
    fireEvent.click(screen.getByText('Sign In'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows success message on valid credentials', async () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'jeevithar@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '123' } });
    fireEvent.click(screen.getByText('Sign In'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Successfully Logged In!')).toBeInTheDocument();
    }, { timeout: 3500 });
  });

  test('shows error message on invalid credentials', async () => {
    render(<Login />);
    
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText('Sign In'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Invalid Credentials!')).toBeInTheDocument();
    }, { timeout: 3500 });
  });

});
