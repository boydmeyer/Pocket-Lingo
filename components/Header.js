import React, { useState, useEffect } from "react";
import Link from "next/link";
import chapterData from "../data";
import {
    MenuIcon,
    AcademicCapIcon,
    BookOpenIcon,
} from "@heroicons/react/outline";

function Header() {
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        setChapters(chapterData);
    }, []);
    return (
        <div className="flex flex-row max-w-xl w-full space-x-1 items-center shadow -xl bg-gray-100 px-3 py-2 mb-2">
            <span className="font-semibold">Chapters</span>
            {chapters &&
                chapters.map((chapter, i) => (
                    <div className="flex items-center" key={i}>
                        <Link
                            href={{
                                pathname: "/chapter/[cid]",
                                query: { cid: i },
                            }}
                        >
                            <div className="flex items-center space-x-1 cursor-pointer text-gray-600 bg-gray-50 border border-gray-300 py-1 px-2 rounded-lg shadow-sm hover:bg-white  font-semibold">
                                {chapter.number}
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    );
}

export default Header;
