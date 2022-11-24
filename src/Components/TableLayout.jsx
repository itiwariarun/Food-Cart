import React from "react";
import Dashboard from "./Dashboard";
function TableLayout({ children }) {
  return (
    <Dashboard>
      <main className="user">
        {/* Replace with your content */}
        <div className="py-4 pt-4">
          <div className="rounded-lg ">
            <div className="px-6">
              <section className="Ts12">{children}</section>
            </div>
          </div>
        </div>
        {/* /End replace */}
      </main>
    </Dashboard>
  );
}

export default TableLayout;
