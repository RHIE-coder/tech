import { useContext } from 'react';
import ColorContext from '@/contexts/color';

export default function ColorBox() {
    const [colorState] = useContext(ColorContext);
    return (
        <>
            <div
              style={{
                width: '32px',
                height: '32px',
                background: colorState.subColor,
              }}>
            </div> 
        </>
    )
}