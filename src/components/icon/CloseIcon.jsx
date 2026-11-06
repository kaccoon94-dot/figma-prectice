import './icons.css'
import closeIcon from '../../assets/icons/close-icon.png'

/**
 * CloseIcon — Figma「닫기아이콘」(node 132:5389, ✕)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 * (아이콘만 있는 버튼에 넣을 때는 버튼 쪽에 aria-label을 붙이세요.)
 */
function CloseIcon({ className = '' }) {
  const classes = ['close-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={closeIcon} alt="" />
}

export default CloseIcon
