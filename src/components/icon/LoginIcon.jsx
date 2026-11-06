import './icons.css'
import loginIcon from '../../assets/icons/login-icon.png'

/**
 * LoginIcon — Figma「로그인아이콘」(node 132:5394)
 * 꾸밈용 아이콘이라 alt=""로 스크린리더가 읽지 않게 합니다.
 */
function LoginIcon({ className = '' }) {
  const classes = ['login-icon', className].filter(Boolean).join(' ')
  return <img className={classes} src={loginIcon} alt="" />
}

export default LoginIcon
