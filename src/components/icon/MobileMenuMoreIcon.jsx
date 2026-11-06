import './icons.css'
import mobileMenuMoreIcon from '../../assets/icons/mobile-menu-more-icon.png'
import mobileMenuMoreIconWhite from '../../assets/icons/mobile-menu-more-icon-white.png'

/**
 * MobileMenuMoreIcon — Figma「모바일메뉴더보기아이콘」(node 156:6605)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색 버전 (진한 배경 위에서 사용, 메뉴텝 클릭)
 */
function MobileMenuMoreIcon({ white = false, className = '' }) {
  const classes = ['mobile-menu-more-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={white ? mobileMenuMoreIconWhite : mobileMenuMoreIcon} alt="" />
}

export default MobileMenuMoreIcon
