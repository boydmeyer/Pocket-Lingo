import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Test from "../../components/Test";

import chapters from "../../data";

function test() {
    const router = useRouter();

    const [chapterId, setChapterId] = useState(0);

    useEffect(() => {
        const { cid } = router.query;
        setChapterId(cid);
    }, [router.query]);

    return (
        <div className="flex flex-col w-full px-3">
            {chapters[chapterId] && (
                <Test words={chapters[chapterId].words} type={0} />
            )}
            {!chapters[chapterId] && <span>Chapter does not exist.</span>}
        </div>
    );
}

export default test;
