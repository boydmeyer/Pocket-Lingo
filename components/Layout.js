import React, { useEffect, useState } from "react";

import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="flex flex-col bg-gray-200 min-h-screen h-full w-full">
            <div className="flex justify-center text-gray-600 text-xs">
                <Header />
            </div>
            <div className="flex justify-center">
                <div className="max-w-xl w-full">{children}</div>
            </div>
        </div>
    );
}

export default Layout;
