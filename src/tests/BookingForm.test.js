import { act, fireEvent, getByLabelText, render, screen, waitFor, within } from "@testing-library/react";
import ReserveMain from "../components/ReserveMain";
import BookingFormV2 from "../components/BookingFormV2";


test('Renders Date', () => {
    render(<BookingFormV2/>);
    const dateElement = screen.getByLabelText("Date");
    expect(dateElement).toBeInTheDocument();
})

test('Validate that updateTimes returns a different value every time', () => {
    render(<ReserveMain/>);
    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-06-07"}});
    const firstTimes = within(screen.getByLabelText('Time')).getAllByRole('option');

    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-07-06"}});
    const secondTimes = within(screen.getByLabelText('Time')).getAllByRole('option');

    expect(secondTimes).not.toEqual(firstTimes);
})

test('Make sure booking form writes to LocalStorage on Submit', () => {
    render(<ReserveMain/>);
    fireEvent.change(screen.getByLabelText('Full Name'), {target: {value: "Jenny"}});
    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-06-07"}});
    fireEvent.change(screen.getByLabelText('Time'), {target: {value: "17:00"}});
    fireEvent.change(screen.getByLabelText('Guests'), {target: {value: 2}});

    act(()=>{
        fireEvent.submit(screen.getByTestId('res-form'));
    });

    waitFor(()=>{
        expect(localStorage).toHaveLength(1);
    });
})

test('Test that validation works correctly', () => {
    render(<ReserveMain/>);

    fireEvent.click(screen.getByRole('button'), {pendingProps: {type: 'submit'}});

    waitFor(()=>{
       expect(screen.getAllByTestId('res-error-div')).toBeInTheDocument();
    });
})

test('Make sure no errors in form.', () => {
    render(<ReserveMain/>);

    fireEvent.change(screen.getByLabelText('Full Name'), {target: {value: "Jenny"}});
    fireEvent.change(screen.getByLabelText('Date'), {target: {value: "2023-06-07"}});
    fireEvent.change(screen.getByLabelText('Time'), {target: {value: "17:00"}});
    fireEvent.change(screen.getByLabelText('Guests'), {target: {value: 2}});

    waitFor(()=>{
       expect(screen.getAllByTestId('res-error-div')).not.toBeInTheDocument();
    });
})