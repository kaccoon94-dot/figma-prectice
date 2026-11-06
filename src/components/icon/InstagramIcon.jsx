import './icons.css'
import InstagramIconSrc from '../../assets/icons/instagram-icon.png'

/**
 * InstagramIcon — Figma「인스타그램아이콘」(node 132:5379)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function InstagramIcon({ className = '' }) {
  const classes = ['instagram-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={InstagramIconSrc} alt="" />
}

export default InstagramIcon
