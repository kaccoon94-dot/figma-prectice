import './icons.css'
import MoreIconSrc from '../../assets/icons/more-icon.png'

/**
 * MoreIcon — Figma「더보기아이콘」(node 254:7715)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function MoreIcon({ className = '' }) {
  const classes = ['more-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={MoreIconSrc} alt="" />
}

export default MoreIcon
