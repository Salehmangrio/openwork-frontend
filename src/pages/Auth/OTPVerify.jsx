import React, { useState, useEffect } from "react";

const OTPVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  // Countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  // OTP input handling
  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 4) {
      alert("Please enter full OTP.");
      return;
    }
    alert("OTP Verified: " + code);
  };

  const handleResend = () => {
    alert("OTP resent!");
    setTimer(30);
    setResendDisabled(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Verify OTP
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Enter the 4-digit OTP sent to your email
        </p>

        {/* OTP BOXES */}
        <div className="flex justify-center gap-4 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="
                w-14 h-14 text-center text-2xl font-semibold 
                border border-gray-300 dark:border-gray-600 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500 dark:bg-gray-700 dark:text-white
              "
            />
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          className="
            w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 
            text-white font-semibold rounded-lg transition
          "
        >
          Continue
        </button>

        {/* Resend OTP */}
        <div className="mt-6 text-gray-700 dark:text-gray-300">
          Didn't get the code?{" "}
          <button
            onClick={handleResend}
            disabled={resendDisabled}
            className={`
              font-semibold ml-1 
              ${resendDisabled ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:underline cursor-pointer"}
            `}
          >
            Resend OTP
          </button>
        </div>

        {resendDisabled && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Resend available in {timer}s
          </p>
        )}
      </div>
    </div>
  );
};

export default OTPVerify;
