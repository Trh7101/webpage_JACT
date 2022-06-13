import React, { useState } from 'react';

export const SearchContext = React.createContext(null);


export function SearchProvider({ children }) {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('')
    const [mode, setMode] = useState('collections');

    const fetchResults = async () => {

    };

    return (
        <SearchContext.Provider value={{ results, query, setQuery, mode, setMode }}>
            {children}
        </SearchContext.Provider>
    );
}