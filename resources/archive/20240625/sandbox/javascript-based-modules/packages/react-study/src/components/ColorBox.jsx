import { useContext } from 'react';
import ColorContext from '@/contexts/color';

export default function ColorBox() {
    const [colorState] = useContext(ColorContext);
    return (
        <>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: colorState.color
              }}>
            </div> 
        </>
    )
}