import './icons.css'
import SearchIconSrc from '../../assets/icons/search-icon.png'

/**
 * SearchIcon — Figma「검색아이콘」(node 132:5399)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function SearchIcon({ className = '' }) {
  const classes = ['search-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={SearchIconSrc} alt="" />
}

export default SearchIcon
