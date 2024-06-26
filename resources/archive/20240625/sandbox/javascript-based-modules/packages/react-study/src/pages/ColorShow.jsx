import {useState} from 'react';
import ColorContext from '@/contexts/color'
import SelectColor from '@/components/SelectColor';
import ColorBox from '@/components/ColorBox';
import ColorSubBox from '@/components/ColorSubBox';

export default function ColorShow() {
    const colorState = useState({
        color: 'black',
        subColor: 'green',
    })
    return (
        <ColorContext.Provider value={colorState}>
            <>
                <SelectColor />
                <ColorBox />
                <ColorSubBox /> 
            </> 
        </ColorContext.Provider>
    )
}