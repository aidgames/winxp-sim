import startmenu_items from './startmenu_items';

var items=startmenu_items();

export default function StartMenu({className}, ...props){
    const menu_items=items.map((item, index)=>
        <li key={index} className={className+"__items__item"} onClick={item.onclick}>
            <img src={item.img} alt={item.name} className={className+"__items__item__image"}/>{item.name}
        </li>
    )
    return (
        <div className={className}>
            <ul className={className+"__items"}>
                {menu_items}
            </ul>
        </div>
    )
}