import React, { useEffect, useState } from "react";

function Option({
    index,
    type,
    option,
    currentWord,
    selectedWord,
    selectOption,
}) {
    const [text, setText] = useState("");

    useEffect(() => {
        if (type === 0) {
            setText(`${option.pinyin} (${option.traditional})`);
        } else if (type === 1) {
            setText(`${option.pinyin} (${option.english})`);
        }
    }, [currentWord, type]);

    return (
        <>
            {selectedWord && currentWord.id === option.id && (
                <span className="flex items-center px-3 py-2 font-bold bg-green-100 text-green-500 rounded-lg">
                    <span className="flex items-center justify-center h-7 w-7 mr-2 rounded-full bg-green-200  text-green-500">
                        {index}
                    </span>{" "}
                    {text}
                </span>
            )}
            {selectedWord &&
                currentWord.id != option.id &&
                selectedWord.id === option.id && (
                    <span className="flex items-center px-3 py-2 font-bold bg-red-100 text-red-500 rounded-lg ">
                        <span className="flex items-center justify-center h-7 w-7 mr-2 rounded-full bg-red-200 text-red-500">
                            {index}
                        </span>{" "}
                        {text}
                    </span>
                )}
            {selectedWord &&
                currentWord.id != option.id &&
                selectedWord.id != option.id && (
                    <span className=" flex items-center cursor-pointer px-3 py-2 font-bold bg-gray-100 text-gray-300 rounded-lg ">
                        <span className="flex items-center justify-center h-7 w-7 mr-2 rounded-full bg-gray-50  text-gray-300">
                            {index}
                        </span>{" "}
                        {text}
                    </span>
                )}
            {!selectedWord && (
                <span
                    className=" flex items-center cursor-pointer px-3 py-2 font-bold bg-gray-100 hover:text-indigo-600 hover:bg-indigo-100 text-gray-500 rounded-lg"
                    onClick={() => selectOption(option)}
                >
                    <span className="flex items-center justify-center h-7 w-7 mr-2 rounded-full bg-gray-50 text-gray-500">
                        {index}
                    </span>{" "}
                    {text}
                </span>
            )}
        </>
    );
}

export default Option;
