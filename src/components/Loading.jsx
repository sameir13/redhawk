"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);


  console.log

  useEffect(() => {

    window.document.body.style.overflow = "hidden";

   
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    
      window.document.body.style.overflow = "visible";
    }, 3000); 
    return () => {
      clearTimeout(timeoutId);
    
      window.document.body.style.overflow = "visible";
    };
  }, [])

  return (
    <div>
      {isLoading && (
        <div className="bg-white z-50 flex items-center justify-center fixed inset-0">
          <img src="./images/Settings.gif" className="mx-5 w-96" alt="" />
        </div>
      )}
    </div>
  );
};

export default Loading;
