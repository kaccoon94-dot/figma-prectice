import './icons.css'
import ipinIcon from '../../assets/icons/ipin-icon.png'

/**
 * IpinIcon — Figma「아이핀아이콘」(node 132:5397)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function IpinIcon({ className = '' }) {
  const classes = ['ipin-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={ipinIcon} alt="" />
}

export default IpinIcon
