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
          sitekey={process.env.REACT_APP_RECAPTCHA_SECRET_KEY}
          onChange={onChange}
          theme="dark"
        />
      )}
      {verified && "leondoes.contact@gmail.com"}
    </div>
  );
};

export default EmailReCAPTCHA;
