import React from "react";
import Layout from "./Layout";
import { BsCheck2Circle } from "react-icons/bs";


const ConfirmedBooking = () => {

    // Local Storage

    const formStuff = JSON.parse(localStorage.formData);
    const day = formStuff[2].slice(8, formStuff[2].length);
    const month = formStuff[2].slice(5,7);
    const months = {
        "01": 'January',
        "02": 'February',
        "03": 'March',
        "04": 'April',
        "05": 'May',
        "06": 'June',
        "07": 'July',
        "08": 'August',
        "09": 'September',
        "10": 'October',
        "11": 'November',
        "12": 'December'
    }
    const year = formStuff[2].slice(0,4);

    return(
        <Layout>
            <main id="confirmed-booking">
                <BsCheck2Circle className="confirmed-check"/>
                <h1>Thank You, {formStuff[1]}!</h1>
                <p>Your table has been booked for {formStuff[3]} on {months[month]} {day}, {year}.</p>
            </main>
        </Layout>
    )
}

export default ConfirmedBooking;