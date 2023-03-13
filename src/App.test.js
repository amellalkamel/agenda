import { render, screen } from '@testing-library/react';
import DivEvnt from './components/DivEvent';
import Calender from './pages/Calender';

test('renders learn react link', () => {
  render(<Calender />);
  render(<DivEvnt />);

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
