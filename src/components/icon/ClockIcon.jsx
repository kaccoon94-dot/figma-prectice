import './icons.css'
import ClockIconSrc from '../../assets/icons/clock-icon.png'

/**
 * ClockIcon — Figma「시계아이콘」(node 132:5388)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경·사진 위)
 */
function ClockIcon({ white = false, className = '' }) {
  const classes = ['clock-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={ClockIconSrc} alt="" />
}

export default ClockIcon
