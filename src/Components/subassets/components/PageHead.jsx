import React from "react";

const PageHead = ({ children }) => {
  return (
    <div>
      <div className="p-5 mx-2 my-5 md:flex rounded-3xl bg-stone-900 md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHead;
