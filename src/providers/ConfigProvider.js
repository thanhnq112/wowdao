import { createContext, useContext, useMemo, useRef, useState } from "react";

export const initialValue = {
    currentSlideIndex: 0,
    showSecondNavWrap: false,
    showFooterNavWrap: false,
    showPaginationSlide: false,
};

export const ConfigContext = createContext();
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ({children}) => {
    const [config, setConfig] = useState(initialValue);
    const swiperRef = useRef(null);

    const contextValue = useMemo(() => {
        return {
            config, 
            setConfig, 
            swiperRef,
        };
    }, [config]);

    return (
        <ConfigContext.Provider value={contextValue}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    return useContext(ConfigContext);
};