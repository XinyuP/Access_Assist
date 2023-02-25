import React, { useState } from "react";
import './address-form.styles.css';

function AddressForm() {
  const [address, setAddress] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(address);
    // do something with the address, like submit it to a server or store it in state
  }

  function handleChange(event) {
    setAddress(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label class="address-label">
        <p class="address-label-p"> What's your address? </p>
        <input class="address-field" type="text" value={address} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddressForm;