import { render, screen } from '@testing-library/react';
import Calender from '../Calender';

test('renders name', () => {
    render(<Calender />);
    const nineAMHourElement = screen.getByText(/9 am/i);
    const tenAMHourElement = screen.getByText(/10 am/i);
    const elevenAMHourElement = screen.getByText(/11 am/i);
    const twelveHourElement = screen.getByText(/12 am/i);
    const onePMHourElement = screen.getByText(/1 pm/i);
    const twoPMHourElement = screen.getByText(/2 pm/i);
    const threePMHourElement = screen.getByText(/3 pm/i);
    const fourPMHourElement = screen.getByText(/4 pm/i);
    const fivePMHourElement = screen.getByText(/5 pm/i);
    const sixPMHourElement = screen.getByText(/6 pm/i);
    const sevenPMHourElement = screen.getByText(/7 pm/i);
    const eightPMHourElement = screen.getByText(/8 pm/i);
    const ninePMHourElement = screen.getByText(/9 pm/i);

    expect(nineAMHourElement).toBeInTheDocument();
    expect(tenAMHourElement).toBeInTheDocument();
    expect(elevenAMHourElement).toBeInTheDocument();
    expect(twelveHourElement).toBeInTheDocument();
    expect(onePMHourElement).toBeInTheDocument();
    expect(twoPMHourElement).toBeInTheDocument();
    expect(threePMHourElement).toBeInTheDocument();
    expect(fourPMHourElement).toBeInTheDocument();
    expect(fivePMHourElement).toBeInTheDocument();
    expect(sixPMHourElement).toBeInTheDocument();
    expect(sevenPMHourElement).toBeInTheDocument();
    expect(eightPMHourElement).toBeInTheDocument();
    expect(ninePMHourElement).toBeInTheDocument();
});
