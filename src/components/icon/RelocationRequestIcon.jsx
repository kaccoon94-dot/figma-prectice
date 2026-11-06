import './icons.css'
import RelocationRequestIconSrc from '../../assets/icons/relocation-request-icon.png'

/**
 * RelocationRequestIcon — Figma「이장신청아이콘」(node 132:5391)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경 위, 헤더메뉴 호버)
 */
function RelocationRequestIcon({ white = false, className = '' }) {
  const classes = ['relocation-request-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={RelocationRequestIconSrc} alt="" />
}

export default RelocationRequestIcon
