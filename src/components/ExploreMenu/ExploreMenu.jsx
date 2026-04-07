import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore Our Menu</h2>
      <p className='explore-menu-text'>choose from a diverse menu featuring a delactable arry of dishes ,our mission is to satisfy your cravings with every bite.
         Whether you're in the mood for a quick snack or a full meal, 
         our menu has something for everyone. From classic favorites to innovative creations, 
         we use only the freshest ingredients to ensure that every dish is bursting with flavor. 
         Explore our menu and discover your new favorite dish today!
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className='explore-menu-list-item'>
<img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
         </div>  
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
