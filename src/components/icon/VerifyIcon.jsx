import './icons.css'
import verifyIcon from '../../assets/icons/verify-icon.png'

/**
 * VerifyIcon — Figma「본인인증아이콘」(node 132:5381)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function VerifyIcon({ className = '' }) {
  const classes = ['verify-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={verifyIcon} alt="" />
}

export default VerifyIcon
