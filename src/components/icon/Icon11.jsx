import './icons.css'
import icon11 from '../../assets/icons/icon-11.png'
import icon11White from '../../assets/icons/icon-11-white.png'

/**
 * Icon11 — Figma「아이콘11」(node 177:7846, 왼쪽 화살표 ‹)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 * (버튼에 넣을 때는 버튼 쪽에 aria-label을 붙이세요.)
 *
 * @param {boolean} white  흰색 버전 (추모의글 카드에서 사용)
 */
function Icon11({ white = false, className = '' }) {
  const classes = ['icon-11', className].filter(Boolean).join(' ')
  return <img className={classes} src={white ? icon11White : icon11} alt="" />
}

export default Icon11
