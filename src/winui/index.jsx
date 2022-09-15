import './winui.scss'
import { useState } from 'react'

export default function WinUI(){
    const [menu, setMenu] = useState(false);
    const startmenu_btn_click=(setMenu, menu)=>{
        return (e)=>{
            let nowMenu=!menu
            setMenu(nowMenu)
            console.log(nowMenu)
        }

    }
    return (
        <div className='winui'>
            {menu &&<div>
                    Hello!
            </div>}
            <div className="winui__startmenu">
                
                <div className='winui__startmenu__btn'>
                    <button onClick={startmenu_btn_click(setMenu, menu)}>
                        Start Menu
                    </button>
                </div>
                
            </div>
        </div>
        
    )
}