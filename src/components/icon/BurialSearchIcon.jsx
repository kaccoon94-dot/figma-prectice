import './icons.css'
import BurialSearchIconSrc from '../../assets/icons/burial-search-icon.png'

/**
 * BurialSearchIcon — Figma「안장자찾기아이콘」(node 132:5395)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경 위, 헤더메뉴 호버)
 */
function BurialSearchIcon({ white = false, className = '' }) {
  const classes = ['burial-search-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={BurialSearchIconSrc} alt="" />
}

export default BurialSearchIcon
