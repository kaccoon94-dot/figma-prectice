import './icons.css'
import MemorialMessageWriteIconSrc from '../../assets/icons/memorial-message-write-icon.png'

/**
 * MemorialMessageWriteIcon — Figma「추모참배글남기기아이콘」(node 132:5387)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 *
 * @param {boolean} white  흰색으로 표시 (진한 배경·사진 위)
 */
function MemorialMessageWriteIcon({ white = false, className = '' }) {
  const classes = ['memorial-message-write-icon', white ? 'icon--white' : '', className].filter(Boolean).join(' ')
  return <img className={classes} src={MemorialMessageWriteIconSrc} alt="" />
}

export default MemorialMessageWriteIcon
