import classes from './Navigation.module.css'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useClickAway from './../../../../hooks/click-away'



const Navigation = () => {
    
  
  
  const navigationPagesUrlsDOMVisibilityHook = useClickAway()
  
  
  
  const indexPagesUrlsSlice = useSelector(store => store.indexPagesUrls)


  
  
  const navigationPagesUrlsDOM = (
    <ul id='layout-header-navigation-pages-urls-click-away-immune'>
      { Object.keys(indexPagesUrlsSlice).map(key => (
        <li key={ `layout_header_navigation_pages_urls_${ key }` }>
          <NavLink
            to={ indexPagesUrlsSlice[key].url }
            activeClassName={ classes.active }
            exact
          >
            { key }
          </NavLink>
        </li>
      )) }
    </ul>
  )
  
  
  return (

    <nav className={ classes.navigation }>



      <button
        className={ classes['navigation-button'] }
        type='button'
        id='layout-header-navigation-pages-urls-dropdown-button'
        onClick={ navigationPagesUrlsDOMVisibilityHook.visibilityHandler }
      ></button>

      { navigationPagesUrlsDOMVisibilityHook.visible && navigationPagesUrlsDOM }



    </nav>

  )



}



export default Navigation