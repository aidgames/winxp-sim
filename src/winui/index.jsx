import './winui.scss'
import StartMenu from './startmenu';

import { useState } from 'react'

export default function WinUI(){
    const [menu, setMenu] = useState(false);
    const startmenu_btn_click=(setMenu, menu)=>{
        return (e)=>{
            let nowMenu=!menu
            setMenu(nowMenu)
        }

    }
    return (
        <div className='winui'>
            <div className='winui__backgroud'/>
            {menu && <StartMenu className="winui__menu_ui"/>}
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