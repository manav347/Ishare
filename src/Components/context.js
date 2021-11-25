import React, { useState, useContext, createContext } from 'react';

const ItemContext = createContext();

export function UseSelectedLocation() {
    return useContext(ItemContext)
}

export function Context({ children }) {

    const [slocation, setSlocation] = useState('Mumbai');

    const value = { slocation, setSlocation }
    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}

