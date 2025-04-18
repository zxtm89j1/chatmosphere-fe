"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import mainStyles from "../../../public/assets/styles/mainStyles";
import { GlobalLoading, show, hide } from "react-global-loading";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // useEffect(() => {
  //   show();
  // });
  const validateCredentials = () => {
    const newErrors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields
    if (!email) {
      newErrors.push("Email is required");
    }

    if (!password) {
      newErrors.push("Password is required");
    }

    if (!confirmPassword) {
      newErrors.push("Please confirm your password");
    }

    // Validation for email format
    if (email && !emailRegex.test(email)) {
      newErrors.push("Invalid email address");
    }

    // Password validation
    if (password && password.length < 8) {
      newErrors.push("Password must be at least 8 characters");
    }

    // Confirm password validation
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.push("Passwords do not match");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateCredentials();

    if (isValid) {
      // Here you would typically call your authentication service
      console.log("Form is valid, submitting:", { email, password });

      // Simulate API call
      setTimeout(() => {
        alert("Signup successful!");
        // Redirect or other success handling would go here
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    <div>
      <GlobalLoading />
      <div className="flex px-5 py-5 justify-center items-center">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-5">
            <Image
              src="/assets/images/logo.svg"
              width={45}
              height={45}
              alt="Chatmosphere logo"
            />
            <div
              className={`font-roboto-condensed text-2xl font-bold text-[${mainStyles.mainColor}]`}
            >
              CHATmosphere
            </div>
          </Link>
        </div>
      </div>

      <div className="flex px-5 py-5 justify-center items-center h-screen">
        <form className="flex flex-col items-center justify-center border-1 px-5 py-10 w-[40%] border-[#c0ccca] gap-5 rounded-3xl">
          <div
            className={`font-roboto-condensed text-3xl font-bold text-[${mainStyles.mainColor}] mb-5`}
          >
            Create your account
          </div>

          {errors.length > 0 && (
            <div className="w-[90%] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <ul className="list-disc pl-5">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="w-[90%] flex flex-col items-center">
            <div
              className={`self-start text-lg text-[#2d172f] ${mainStyles.mainFont}`}
            >
              Email Address
            </div>
            <input
              type="email"
              onChange={(e) => {
                clearErrors();
                setEmail(e.target.value);
              }}
              placeholder="Enter Email Address"
              value={email}
              className={`border border-[#c0ccca] w-full focus:border-[#2d172f] outline-none px-2 py-3 rounded-md text-[#2d172f] ${mainStyles.mainFont}`}
            />
          </div>

          <div className="w-[90%] flex flex-col items-center">
            <div
              className={`self-start text-lg text-[#2d172f] ${mainStyles.mainFont}`}
            >
              Password
            </div>
            <input
              type="password"
              onChange={(e) => {
                clearErrors();
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              value={password}
              className={`border border-[#c0ccca] w-full focus:border-[#2d172f] outline-none px-2 py-3 rounded-md text-[#2d172f] ${mainStyles.mainFont}`}
            />
          </div>

          <div className="w-[90%] flex flex-col items-center">
            <div
              className={`self-start text-lg text-[#2d172f] ${mainStyles.mainFont}`}
            >
              Confirm Password
            </div>
            <input
              type="password"
              onChange={(e) => {
                clearErrors();
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm Password"
              value={confirmPassword}
              className={`border border-[#c0ccca] w-full focus:border-[#2d172f] outline-none px-2 py-3 rounded-md text-[#2d172f] ${mainStyles.mainFont}`}
            />
          </div>

          <button
            className={`border w-[90%] rounded-md p-3 text-white ${
              mainStyles.mainFont
            } ${
              isSubmitting ? "bg-gray-400" : "bg-[#2d172f]"
            } hover:bg-opacity-90 transition-all`}
            onClick={(e) => signUp(e)}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2d172f] font-semibold">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
