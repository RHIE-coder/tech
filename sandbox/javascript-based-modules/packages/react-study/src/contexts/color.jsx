import { createContext } from 'react';

const ColorContext = createContext({
    color: 'black',
    subColor: 'green',
})

export default ColorContext;