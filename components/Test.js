import React, { useEffect, useState } from "react";
import Word from "./Word";
import setupWords from "../utils/wordUtils";
import shuffleArray from "../utils/shuffleArray";
import { RefreshIcon } from "@heroicons/react/outline";

function Test({ words, type }) {
    const [currentWord, setCurrentWord] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);
    const [wordList, setWorldList] = useState([]);

    const selectOption = (optionId) => {
        if (!selectedWord) {
            const result = optionId === currentWord.id;

            setSelectedWord(optionId);
        }
    };

    const clickNext = () => {
        const result = selectedWord
            ? selectedWord.id === currentWord.id
            : false;

        if (!result)
            wordList.push({
                ...currentWord,
                answers: shuffleArray(currentWord.answers),
            });
        wordList.shift();
        setCurrentWord(wordList[0]);
        setSelectedWord(null);
    };

    /**
     * Setup for new session
     * @param {*} wordList
     */
    const setup = (words) => {
        setSelectedWord(null);
        setWorldList(setupWords(words));
    };

    /**
     * Setup word list and current word on load page
     */
    useEffect(() => {
        setSelectedWord(null);
        setWorldList(setupWords(words));
        setCurrentWord(wordList[0]);
    }, [words]);

    useEffect(() => {
        setCurrentWord(wordList[0]);
    }, [wordList]);

    return (
        <div className="flex flex-col w-full">
            {wordList && currentWord && (
                <>
                    <div className="bg-white rounded-lg shadow-md p-8 w-full">
                        <Word
                            type={type}
                            currentWord={currentWord}
                            selectedWord={selectedWord}
                            selectOption={selectOption}
                            clickNext={clickNext}
                        />
                    </div>
                    <span
                        className="flex space-x-1 items-center justify-center font-semibold text-gray-400 cursor-pointer px-3 py-2"
                        onClick={() => setup(words)}
                    >
                        <RefreshIcon className="h-5" />
                        <div>Restart</div>
                    </span>
                </>
            )}
        </div>
    );
}

export default Test;
