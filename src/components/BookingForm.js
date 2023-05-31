import React, { useState } from "react";

const BookingForm = ({availableTimes = [], guests = 2, ...props}) =>{

    // State for Tracking

    const [book, setBook] = useState({
        name: "",
        date: "",
        time: "",
        guests: 2,
        occasion: "None"
    });

    // Handle Change

    const handleChange = (k, v) =>{
        setBook({...book, [k]: v});
    }

    const handleSubmit = () => {
        props.submitForm(book);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-name">Name</label>
                <input type="text" id="res-name" placeholder={book.name} onChange={e=>handleChange("name", e.target.value)}/>
                <label htmlFor="res-date">Date</label>
                <input type="date" id="res-date" onChange={
                    (e) => {
                        props.dispatch({type: "change_date", date: e.target.value});
                        handleChange("date", e.target.value);
                    }}/>

                <label htmlFor="res-time">Time</label>
                <select id="res-time" onChange={e=>handleChange("time", e.target.value)}>
                    {availableTimes.map(time=><option key={time}>{time}</option>)}
                </select>

                <label htmlFor="guests">Guests</label>
                <input type="number"
                placeholder={guests}
                min="1"
                max="10"
                id="guests"
                onChange={e=>handleChange("guests", e.target.value)} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={e=>handleChange("occasion", e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>

                <input type="submit" value="Submit Reservation"/>
            </form>

            {/* <h3>Current name: {book.name}</h3>
            <h3>Current date: {book.date}</h3>
            <h3>Current time: {book.time}</h3>
            <h3>Current Guests: {book.guests}</h3>
            <h3>Current occasion: {book.occasion}</h3> */}
        </>
    )
}

export default BookingForm;