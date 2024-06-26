import { useContext } from 'react';
import ColorContext from '@/contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export default function SelectColor() {
    const [color, setColor] = useContext(ColorContext);
    return (
        <div>
            <h2> SELECT COLOR</h2>
            <div style={{display:'flex'}}>
                {colors.map(colorOne=>(
                    <div
                        key={colorOne}
                        style={{
                            width:'40px',
                            height:'40px',
                            background:colorOne,
                            cursor:'pointer',
                        }}
                        onClick={()=> {
                            setColor({
                                ...color,
                                color:colorOne,
                            })
                        }}
                        onContextMenu={e=>{
                            e.preventDefault();
                            setColor({
                                ...color,
                                subColor:colorOne,
                            })
                        }}
                    >
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}