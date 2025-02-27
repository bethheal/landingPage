import React from "react";
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
