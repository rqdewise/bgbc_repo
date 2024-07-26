"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { MapPin, Mail, Phone} from 'lucide-react'

type FormSchema = {
  botcheck: boolean,
  name: string,
  email: string,
  message: string,
}
export default function WidgetContact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm<FormSchema>({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  // Please update the Access Key in the Sanity CMS - Site Congig Page

  const apiKey = "YOUR_ACCESS_KEY_HERE";


  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "RBNTECH Contact Form",
      subject: "New client want to reach out!"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });
  return (
    <section className="relative w-full text-slate-200 py-20 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800">
      <div className="container mx-auto pb-20 relative">
        <h3 className="text-4xl font-semibold mb-20 text-center pt-10">
            CONTACT
        </h3>
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div id="contact-summary" className="md:px-4">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full md:px-4">
                  <div className="text-center w-full shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                      <MapPin className="inline-block text-center my-5" size={44} />
                      <h3 className="text-2xl">Our Location</h3>
                      <p>No. 12 Rua do S. Jose, Edificio Hang Wan R/C, Macau SAR China</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5 mt-5">
                    <div className="text-center md:w-1/2 shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                        <Mail className="inline-block  my-5" size={44} />
                        <h3 className="text-2xl">Email Us</h3>
                        <p>bdgate@macau.ctm.net</p>
                    </div>
                    <div className="text-center md:w-1/2 shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                        <Phone className="inline-block  my-5" size={44} />
                        <h3 className="text-2xl">Call Us</h3>
                        <p>+853 2878 2305</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div id="contact-form" className="md:px-4 lg:pt-0 bg-slate-800 text-slate-200 ">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:px-4">
                <div className="text-slate-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                  <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                          Need A Prayer?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4">
                          Complete this form and we will get back to you in 24
                          hours.
                      </p>
                      <div className="relative w-full mb-3 mt-8">
                      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{ errors.name.message }</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message }</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-sky-500 hover:bg-sky-700 rounded-md focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>         
      </div>   
    </section>
  )
}
