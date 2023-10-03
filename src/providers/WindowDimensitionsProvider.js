import { createContext, useContext, useMemo, useState, useEffect } from "react";

export const initialValue = {
    width: 0,
    height: 0,
};

export const WindowDimensionsContext = createContext(initialValue);
WindowDimensionsContext.displayName = "WindowDimensionsContext";

export const WindowDimensionsProvider = ({ children }) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
        if (typeof window === "undefined") return initialValue;
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <WindowDimensionsContext.Provider value={windowDimensions}>
            {children}
        </WindowDimensionsContext.Provider>
    );
};

export const useWindowDimensions = () => {
    return useContext(WindowDimensionsContext);
};