import { useState } from "react"

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function Window({children}, ...props){
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
    const bind = useDrag(({ down, movement: [mx, my] }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    })
    const [win, setWin]=useState(true);
    if (win){
        return (
        <animated.div className="winui__window" style={{
            "margin-left": x,
            "margin-top": y
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
        )
    }
}