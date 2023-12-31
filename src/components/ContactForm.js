import React from 'react';
import { useState } from "react";
import axiosInstance from "@/utils/axios.config";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const ContactForm = () => {
    const router = useRouter();
  const [serviceType, setServiceType] = useState("");
  const [data, setData] = useState({});
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serviceType) {
      return toast.error("Service type is required");
    }
    if (!data.budget) {
      return toast.error("Budget is required");
    }
    axiosInstance
      .post("/api/send-contract", { ...data, service_type: serviceType })
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            "Your contact information has been sent to the authorities."
          );
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error("An error Occured");
      });
  };
    return (
        <div
        className="bg-gray-500 order-1 md:order-2 lg:order-2 py-4"
        style={{ backgroundColor: "#727c80" }}
      >
        <h2 className="lg:text-3xl text-2xl lg:mx-auto lg:w-10/12 my-8 mx-4">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="lg:mx-auto lg:w-10/12 mx-4">
          <div className="my-2 border border-[2px]   justify-center flex items-center rounded-md shadow-md">
            <div>
              <button className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-6 h-6 ">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>

            <div className=" w-full">
              <input
                type="search"
                x-model="input1"
                name="name"
                onChange={handleChange}
                className="w-full h-8 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                placeholder="Name"
                required
              />
            </div>
          </div>

          <div className="my-2 border border-[2px]   justify-center flex items-center rounded-md shadow-md">
            <div>
              <button
                type=" submit"
                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-6 h-6"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                x-model="input1"
                className="w-full h-8 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="my-4 font-bold">
            <label htmlFor="service" className="text-gray-300 text-lg">
              Services Needed
            </label>
            <br />
            <div className="flex">
              <div className="me-2">
                <input
                  type="radio"
                  onChange={(e) => setServiceType(e.target.value)}
                  checked={serviceType === "residential"}
                  value="residential"
                  className="me-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  name="servicetype"
                  id=""
                />
                <label htmlFor="residential " className="text-gray-400">
                  Residential
                </label>
              </div>

              <div className="me-2">
                <input
                  type="radio"
                  onChange={(e) => setServiceType(e.target.value)}
                  checked={serviceType === "commercial"}
                  value="commercial"
                  className="me-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  name="servicetype"
                  id=""
                />
                <label htmlFor="commercial" className="text-gray-400">
                  Commercial
                </label>
              </div>
            </div>
          </div>

          <div className="my-2 border   border-[2px]   justify-center flex items-center rounded-md shadow-md">
            <div>
              <button
                type="submit"
                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-6 h-6"
              >
                <FontAwesomeIcon icon={faDiagramProject} />
              </button>
            </div>

            <div className="w-full">
              <input
                type="number"
                name="es_time"
                onChange={handleChange}
                x-model="input1"
                className="w-full h-8 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                placeholder="Est. Project Timeline"
                required
              />
            </div>
          </div>

          <textarea
            id="message"
            rows="4"
            name="description"
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Descrive your project"
            required
          ></textarea>

          <br />

          <div className="flex justify-between">
            <label
              htmlFor="default-range"
              className="block mb-2 text-sm font-medium text-gray-300 dark:text-white "
            >
              Approximate Budget
            </label>
            {data?.budget > 0 && (
              <span className="text-xl font-bold text-emerald-900 animate__animated animate__fadeIn">
                {" "}
                BDT- {data?.budget} K
              </span>
            )}
          </div>

          <input
            id="default-range"
            type="range"
            name="budget"
            onChange={handleChange}
            defaultValue="0"
            max="30000"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />

          <div className="mt-4 space-y-20">
            <div className="w-full">
              <div className="flex-1 h-full">
                <button
                  type="submit"
                  className="flex w-full bg-white shadow rounded-lg py-1 px-16"
                >
                  <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-gray-800">
                    Submit
                  </p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default ContactForm;