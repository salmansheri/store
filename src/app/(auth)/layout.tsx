import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <section
        className={
          "hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5"
        }
      >
        <div className="space-y-5 text-white">
          <h1 className={"h1"}>Manage your files the best way</h1>
          <p className={"body-1"}>
            This is a place where you can store all your documents
          </p>
        </div>
      </section>
      <section
        className={
          "flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0"
        }
      ></section>
      {children}
    </div>
  );
}
