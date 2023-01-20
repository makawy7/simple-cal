import { useState, useContext, createContext } from 'react';

const InputResultContext = createContext();

function InputResultProvider({ children }) {
    const [res, setRes] = useState({
        input: 0,
        result: 0
    });

    return (
        <InputResultContext.Provider value={[res, setRes]}>
            {children}
        </InputResultContext.Provider>
    );
}

export const useInputResultContext = () => useContext(InputResultContext);
export default InputResultProvider;