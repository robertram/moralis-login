import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import { Header } from "../src/components/Header";
import CustomButton from "../src/components/CustomButton";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const { signup, isAuthenticated, logout, user } = useMoralis();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <h1>You are now logged in</h1>
      {console.log("user", user)}

      <CustomButton text="Logout" onClick={() => logout} />
    </div>
  );
};

export default SignUp;
