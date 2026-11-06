import './icons.css'
import UsageGuideIconSrc from '../../assets/icons/usage-guide-icon.png'

/**
 * UsageGuideIcon — Figma「이용안내아이콘」(node 132:5392)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경 위, 헤더메뉴 호버)
 */
function UsageGuideIcon({ white = false, className = '' }) {
  const classes = ['usage-guide-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={UsageGuideIconSrc} alt="" />
}

export default UsageGuideIcon
