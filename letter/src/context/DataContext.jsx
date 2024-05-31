import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [words, setWords] = useState([]);

    const addWord = (newWord) => {
        setWords([...words, newWord]);
    }

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await fetch("https://itgirlschool.justmakeit.ru/api/words");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setWords(data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        };
    };

    const handleSave = async (value, id) => {
        try {
            const response = await fetch(
                `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        id: " ",
                        english: value.english,
                        transcription: value.transcription,
                        russian: value.russian,
                        tags: " ",
                        tags_json: " ",
                    }),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch words");
            }
            loadData();
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    return (
        <DataContext.Provider value={{ words, addWord, setWords, handleSave }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };