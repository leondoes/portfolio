import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const EmailReCAPTCHA = () => {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    if (value) {
      setVerified(true);
    }
  }

  return (
    <div>
      {!verified && (
        <ReCAPTCHA
          sitekey="6LfUt3QoAAAAAO2pI8CRS2bVPqBY3EZP-0rtXXhi"
          onChange={onChange}
          theme="dark"
        />
      )}
      {verified && "leondoes.contact@gmail.com"}
    </div>
  );
};

export default EmailReCAPTCHA;
