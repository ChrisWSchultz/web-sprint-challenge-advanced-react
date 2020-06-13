import React from "react";
import {fireEvent, render} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText("First Name:"), {target: {value: 'John' }});
    fireEvent.change(getByLabelText("Last Name:"), {target: {value: 'Doe' }});
    fireEvent.change(getByLabelText("Address:"), {target: {value: '123 W 456 N' }});
    fireEvent.change(getByLabelText("City:"), {target: {value: 'Somewhere' }});
    fireEvent.change(getByLabelText("State:"), {target: {value: 'ThisState' }});
    fireEvent.change(getByLabelText("Zip:"), {target: {value: '09876' }});
    fireEvent.click(getByText("Checkout"));

    getByTestId("successMessage");
});
