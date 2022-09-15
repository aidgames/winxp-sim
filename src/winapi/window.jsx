import { useState } from "react"

export default function Window({children}, ...props){
    const [win, setWin]=useState(true);
    if (win){
        return (
        <div className="winui__window">
            <div className="winui__window__frame">
                <div className="winui__window__frame__buttons">
                    <span className="winui__window__frame__buttons__min">-</span>
                    <span className="winui__window__frame__buttons__max">[]</span>
                    <span className="winui__window__frame__buttons__close" onClick={()=>{
                        setWin(false)
                    }}>X</span>
                </div>
            </div>
            <div className="winui__window__content">
                1
            </div>
        </div>
        )
    }
}