import { useState, useEffect } from "react";

function SamplePage() {
  let initialValues = { fullName: "", email: "", flexibleCheckbox: "false", daysAvail: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleState = (e) => {
    const {name} = e.target;
    
    if (formValues.flexibleCheckbox === true) {
      setFormValues({ ...formValues, [name]: false });
    } else {
      setFormValues({ ...formValues, [name]: true });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    {/***************  Validation for Full Name component ***************/}
    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }

    {/***************  Validation for Email component ***************/}
    if (!regex.test(values.email) && values.email) {
      errors.email = "This is not a valid email address format";
    }

    {/***************  Validation for Flexible and Days for Availability component ***************/}
    if (isNaN(values.daysAvail)) {
      errors.daysAvail = "Days for Availability only accepts numbers";
    }
    
    if (!values.flexibleCheckbox) {
      if (!values.daysAvail) {
        errors.daysAvail = "Days for Availability is required";
      }
    }
    {/*******************************************************************************************/}

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form" >

        {/***************  Full Name component ***************/}
        <div className="fullName-wrapper"  style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
          <label name="fullNameLbl">Full Name</label>
          <input
              type="text"
              name="fullName"
              placeholder="Name"
              maxLength="100"
              value={formValues.fullName}
              onChange={handleChange} />
              <p style={{ color: "red" }}>{formErrors.fullName}</p>
        </div>
        <br/ >
        {/***************************************************/}

        {/*************** Email component ***************/}
            <div className="email-wrapper" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}>
          <label name="emailLbl">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>
        </div>
        <br />
        {/**************************************************/}

        {/*************** Flexible component ***************/}
        <div className="flexible-checkbox-wrapper" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}>
            <input 
              type="checkbox" 
              name="flexibleCheckbox" 
              onChange={handleState}/> Flexible
        </div>
        <br />
        {/*************************************************/}

        {/*************** Days for Availability component ***************/}
        <div className="days-availability-wrapper" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}>
          <label name="daysAvailLbl">Days for Availability</label>
          <input
            type="text"
            name="daysAvail"
            placeholder="Days for Availability"
            value={formValues.daysAvail}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.daysAvail}</p>
        </div>
        <br/>
        {/************************************************************/}

        {/**************** Submit button component ***************/}
        <div className="submit-button-wrapper" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}>
        <button className="fluid ui button blue" name="submitBtn">Save</button>
        </div>
        {/****************************************^***************/}
        
      </div>
    </form>
  </div>);
}

export default SamplePage;