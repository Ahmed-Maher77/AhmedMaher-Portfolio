import React, { createContext, useEffect, useState } from "react";

export const changeColorsContext = createContext();

const ChangeColorsContext = ({children}) => {
    const [mainColor, setMainColor] = useState('');

    useEffect(() => {
        if (mainColor !== "") {
            const rootElement = document.documentElement;
            const classesToRemove = Array.from(rootElement.classList).filter((cls) => cls !== "dark");
            rootElement.classList.remove(...classesToRemove);
            rootElement.classList.add(mainColor);
        }
    }, [mainColor])

	return (
        <changeColorsContext.Provider value={{mainColor, setMainColor}}>
            {children}
        </changeColorsContext.Provider>
    )
    
    ;
};

export default ChangeColorsContext;
