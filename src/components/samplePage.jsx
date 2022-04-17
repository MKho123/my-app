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