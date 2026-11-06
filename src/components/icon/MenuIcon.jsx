import './icons.css'
import MenuIconSrc from '../../assets/icons/menu-icon.png'

/**
 * MenuIcon — Figma「메뉴아이콘」(node 132:5398)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function MenuIcon({ className = '' }) {
  const classes = ['menu-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={MenuIconSrc} alt="" />
}

export default MenuIcon
