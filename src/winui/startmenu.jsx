import startmenu_items from './startmenu_items';

var items=startmenu_items();

export default function StartMenu({className}, ...props){
    const menu_items=items.map((item, index)=>
        <li key={index} className={className+"__item"} onClick={item.onclick}>{item.name}</li>
    )
    return (
        <div className={className}>
            <ul className={className+"__items"}>
                {menu_items}
            </ul>
        </div>
    )
}