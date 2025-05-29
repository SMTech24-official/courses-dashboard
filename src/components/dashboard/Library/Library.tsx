"use client";
// import { useAllLibraryQuery } from "@/redux/features/library/libraryApi";
import Course from "./Course"
import DocumentUplod from "./DocumentUplod"
// import { useState } from "react";


const Library = () => {
  
  return (
    <div className="p-5">
        <Course />
        <DocumentUplod />
    </div>
  )
}

export default Library
