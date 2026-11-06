import './icons.css'
import icon12 from '../../assets/icons/icon-12.png'
import icon12White from '../../assets/icons/icon-12-white.png'

/**
 * Icon12 — Figma「아이콘12」(node 177:7844, 오른쪽 화살표 ›)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 * (버튼에 넣을 때는 버튼 쪽에 aria-label을 붙이세요.)
 *
 * @param {boolean} white  흰색 버전 (추모의글 카드에서 사용)
 */
function Icon12({ white = false, className = '' }) {
  const classes = ['icon-12', className].filter(Boolean).join(' ')
  return <img className={classes} src={white ? icon12White : icon12} alt="" />
}

export default Icon12
