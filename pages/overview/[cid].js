import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Overview from "../../components/Overview";
import chapters from "../../data";

function overview() {
    const router = useRouter();
    const [chapterId, setChapterId] = useState(0);

    useEffect(() => {
        const { cid } = router.query;
        setChapterId(cid);
    }, [router.query]);

    return (
        <div className="flex flex-col w-full px-3">
            {chapters[chapterId] && (
                <Overview words={chapters[chapterId].words} />
            )}
            {!chapters[chapterId] && <span>Chapter does not exist.</span>}
        </div>
    );
}

export default overview;
