import { Link } from 'react-router'
import './HomeShortcut.css'

/**
 * HomeShortcut — Figma「홈바로가기」(내부 화면 맨 위 회색 띠)
 * 누르면 메인 화면(/)으로 이동합니다.
 */
function HomeShortcut({ className = '', ...rest }) {
  const classes = ['home-shortcut', className].filter(Boolean).join(' ')

  return (
    <Link className={classes} to="/" {...rest}>
      홈 바로가기
    </Link>
  )
}

export default HomeShortcut
