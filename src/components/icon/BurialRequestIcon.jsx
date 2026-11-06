import './icons.css'
import burialRequestIcon from '../../assets/icons/burial-request-icon.png'
import burialRequestIconWhite from '../../assets/icons/burial-request-icon-white.png'

/**
 * BurialRequestIcon — Figma「안장신청아이콘」(node 132:5385)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색 버전 (진한 배경 위에서 사용, 헤더메뉴 호버)
 */
function BurialRequestIcon({ white = false, className = '' }) {
  const classes = ['burial-request-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={white ? burialRequestIconWhite : burialRequestIcon} alt="" />
}

export default BurialRequestIcon
