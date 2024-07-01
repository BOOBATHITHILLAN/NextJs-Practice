"use client";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  email: yup.string().email().required("Email required"),
  password: yup.string().required("Password required"),
});

export default function Login() {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [checkpassword, setCheckpassword] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const router = useRouter();

  const handleLogin = async (formData: any) => {
    try {
      const user = await axios.post(
        "http://localhost:8000/auth/signin",
        formData
      );
      if (user) {
        window.localStorage.setItem("token", user.data.token);
        setCheckpassword(false);
        setUserExist(true);
        router.push("/home");
      }
    } catch (error) {
      setUserExist(false);
      setCheckpassword(true);
      reset();
      setTimeout(() => {
        setCheckpassword(false);
      }, 4000);
    }

    // const user = state.find((user: any) => user.email === formData.email);
    // if (user && user.password === formData.password) {
    //   window.localStorage.setItem("token", "12345");
    //   router.push("/home");
    //   setUserNotExist(false);
    // } else if (user && user.password !== formData.password) {
    //   setCheckpassword(true);
    //   setTimeout(() => {
    //     setCheckpassword(false);
    //   }, 4000);
    // } else {
    //   setUserNotExist(true);
    //   reset();
    //   setTimeout(() => {
    //     setUserNotExist(false);
    //   }, 4000);
    // }
  };

  useEffect(() => {
    window.localStorage.setItem("token", "12345");
  }, []);

  const handleTostify = () => {
    toast.error('🦄 Wow so easy!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  return (
    <div
      className={`bg-slate-200 align-middle rounded-md justify-center p-10 m-10 ${styles.container}`}
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 className="flex justify-center mb-6 ">Login Page</h1>
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          {...register("email")}
          className={`block mb-2 p-1 ${styles.email}`}
          id="email"
        />
        <p className="text-center text-red-950 font-bold mb-1">
          {errors.email?.message}
        </p>
        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          {...register("password")}
          className={`block mb-2 p-1 ${styles.password}`}
          id="password"
        />
        <p className="text-center text-red-950 font-bold mb-1">
          {errors.password?.message}
        </p>
        <p className="text-center text-red-950 font-bold mb-1">
          {userExist && "LoggedIn Successfully... "}
        </p>
        <p className="text-center text-red-950 font-bold mb-1">
          {checkpassword && "Invalid credentials... "}
        </p>

        <input
          type="submit"
          value={"Login"}
          className={`bg-teal-200 p-2 rounded-full ${styles.submit}`}
        />
        <button
          type="button"
          className={`bg-teal-200 p-2 rounded-full mt-2 ${styles.submit}`}
          onClick={handleTostify}
        >
          CheckTostify
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
      <p>
        Dont have an account?{" "}
        <Link href={"/signup"}>
          <span className="text-sky-950 font-bold p-2">Register</span>
        </Link>{" "}
      </p>
    </div>
  );
}
