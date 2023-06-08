"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();

  return <div className="w-full bg-fuchsia-900">{params.path}</div>;
};

export default page;
