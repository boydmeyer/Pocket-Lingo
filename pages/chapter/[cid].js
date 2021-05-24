import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import chapters from "../../data";

import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/outline";

function overview() {
    const router = useRouter();
    const [chapterId, setChapterId] = useState(0);

    useEffect(() => {
        const { cid } = router.query;
        setChapterId(cid);
    }, [router.query]);

    return (
        <div className="flex flex-col space-y-3 w-full px-3">
            {chapters[chapterId] && (
                <>
                    <span className="text-xl text-indigo-600 font-semibold">
                        {chapters[chapterId].title}
                    </span>

                    <Link
                        href={{
                            pathname: "/overview/[cid]",
                            query: { cid: chapterId },
                        }}
                    >
                        <div className="text-gray-800 text-xs font-bold space-x-1 cursor-pointer items-center flex flex-row overflow-hidden bg-white rounded-lg shadow-md px-3 py-2">
                            <BookOpenIcon className="h-5" />
                            <span className="">
                                <span>Vocabulary</span>
                            </span>
                        </div>
                    </Link>
                    <Link
                        href={{
                            pathname: "/test/[cid]",
                            query: { cid: chapterId },
                        }}
                    >
                        <div className="text-gray-800 text-xs font-bold space-x-1 cursor-pointer items-center flex flex-row overflow-hidden bg-white rounded-lg shadow-md px-3 py-2">
                            <AcademicCapIcon className="h-5" />
                            <span className="">
                                <span>Practice Vocabulary</span>
                            </span>
                        </div>
                    </Link>
                    <Link
                        href={{
                            pathname: "/reading/[cid]",
                            query: { cid: chapterId },
                        }}
                    >
                        <div className="text-gray-800 text-xs font-bold space-x-1 cursor-pointer items-center flex flex-row overflow-hidden bg-white rounded-lg shadow-md px-3 py-2">
                            <AcademicCapIcon className="h-5" />
                            <span className="">
                                <span>Practice Reading</span>
                            </span>
                        </div>
                    </Link>
                </>
            )}
            {!chapters[chapterId] && <span>Chapter does not exist.</span>}
        </div>
    );
}

export default overview;
