import './icons.css'
import FacebookIconSrc from '../../assets/icons/facebook-icon.png'

/**
 * FacebookIcon — Figma「페이스북아이콘」(node 132:5383)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function FacebookIcon({ className = '' }) {
  const classes = ['facebook-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={FacebookIconSrc} alt="" />
}

export default FacebookIcon
