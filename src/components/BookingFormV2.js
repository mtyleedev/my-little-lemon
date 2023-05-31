import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import React from "react";

const BookingFormV2 = ({availableTimes = [], guests = 2, ...props}) =>{

    // Handle Submit

    const handleSubmit = (values) => {
        props.submitForm(values);
        console.log(values);
    }

    // Formik Schema

    const reserveSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Name is too short.')
            .max(50, 'Name is too long.')
            .required('Required'),
        date: Yup.string()
            .required('Required'),
        time: Yup.string()
            .required('Required'),
        guests: Yup.number()
            .required('Required')
            .min(1, `Can't have less than one person.`)
            .max(25, "Please contact us via phone for 25+ parties."),
        occasion: Yup.string()
    });

    return(

        <Formik
        initialValues={{
            fullName: '',
            date: '',
            time: '',
            guests: '',
            occasion: "None"
        }}
        validationSchema={reserveSchema}
        onSubmit={values => handleSubmit(values)}>

        {({errors, touched, handleChange}) => {
            return (
               <Form data-testid="res-form">

                    <span className="res-form-wrapper">
                        <label htmlFor="fullName">Full Name</label>
                        <Field name="fullName" id="fullName" className={errors.fullName ? "res-field-error" : ""} aria-label="On Change"/>
                        {errors.fullName && touched.fullName ? (
                            <div data-testid="res-error-div" className="res-error-div">{errors.fullName}</div>
                        ) : null}
                    </span>

                    <span className="res-form-wrapper">
                        <label htmlFor="res-date">Date</label>
                        <Field type="date" name="date" id="res-date" className={errors.date ? "res-field-error" : ""} aria-label="On Change" onChange={
                            (e) => {
                                handleChange(e);
                                props.dispatch({type: "change_date", date: e.target.value});
                            }}
                        />
                        {errors.date ? (
                            <div data-testid="res-error-div" className="res-error-div">{errors.date}</div>
                        ) : null}
                    </span>

                    <span className="res-form-wrapper">
                        <label htmlFor="res-time">Time</label>
                        <Field name="time" as="select" id="res-time" className={errors.time ? "res-field-error" : ""} aria-label="On Change">
                            {availableTimes.map(time=><option key={time}>{time}</option>)}
                        </Field>
                        {errors.time && touched.time ? (
                            <div data-testid="res-error-div" className="res-error-div">{errors.time}</div>
                        ) : null}
                    </span>

                    <span className="res-form-wrapper">
                    <label htmlFor="res-guests">Guests</label>
                    <Field type="number" name="guests" min="1" max="25" id="res-guests" className={errors.guests ? "res-field-error" : ""} aria-label="On Change"/>
                    {errors.guests && touched.guests ? (
                        <div data-testid="res-error-div" className="res-error-div">{errors.guests}</div>
                    ) : null}
                    </span>

                    <span className="res-form-wrapper">
                    <label htmlFor="res-occasion">Occasion</label>
                    <Field name="occasion" as="select" id="res-occasion" aria-label="On Change">
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </Field>
                    </span>

                    <button type="submit" role="button" className="green-button" aria-label="On Submit">Submit Reservation</button>
                </Form>
            )
        }}


        </Formik>
    )
}

export default BookingFormV2;