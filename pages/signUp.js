import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import { Header } from "../src/components/Header";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const { signup, isAuthenticated } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    router.push("/account");
  }, [isAuthenticated]);

  return (
    <div className="">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <div className="flex items-center justify-center mt-12">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
            onSubmit={(e) => {
              e.preventDefault();
              signup(email, password);
            }}
          >
            {console.log("email", email)}
            {console.log("password", password)}
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Sign Up
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autoFocus
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit"
                //onClick={() => signup()}
              >
                Sign Up
              </button>
              {/* <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
