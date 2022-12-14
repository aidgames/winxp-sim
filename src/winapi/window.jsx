import { useState } from "react"

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Resizable } from "react-resizable";

export default function Window({children}, ...props){
    const [{ x, y }, api] = useSpring(() => ({ x: 5, y: 5}))
    const bind = useDrag((state) => {
      api.start({
        x: Number(state.offset[0]),
        y: Number(state.offset[1])
    })
    })
    const [win, setWin]=useState(true);
    const [width, setWidth]=useState(265);
    const [height, setHeight]=useState(2213);
    
    if (win){
        return (
        <Resizable height={height} width={width} onResize={(e, {element, size, handle})=>{
            setWidth(size.width)
            setHeight(size.height)
            console.log(size)
        }} handle={<div>Resize</div>}>
            <animated.div className="winui__window" style={{
                "marginLeft": x,
                "marginTop": y
            }}>
           
                <div className="winui__window__frame" {...bind()}>
                    <div className="winui__window__frame__buttons">
                        <span className="winui__window__frame__buttons__min">-</span>
                        <span className="winui__window__frame__buttons__max">[]</span>
                        <span className="winui__window__frame__buttons__close" onClick={()=>{
                            setWin(false)
                        }}>X</span>
                    </div>
                </div>
                <div className="winui__window__content">
                    {children}
                </div>  
            </animated.div>
        </Resizable>
        
        )
    }
}