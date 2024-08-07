"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timeoutId);
  }, []);

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
