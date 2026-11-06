import { Link } from 'react-router'
import './BottomMenu.css'

/**
 * BottomMenu — Figma「하단메뉴」(node 797:1808)
 * 상태: 기본 / 호버(:hover)
 * 하위 페이지로 이동하는 메뉴라서 링크로 만듭니다.
 * 사이트 안 주소('/'로 시작)는 새로고침 없이 이동합니다.
 *
 * @param {React.ReactNode} children  메뉴 글자 (기본 "인사말")
 * @param {string} href               이동할 주소
 */
function BottomMenu({ children = '인사말', href = '#', className = '', ...rest }) {
  const classes = ['bottom-menu', className].filter(Boolean).join(' ')

  if (href.startsWith('/')) {
    return (
      <Link className={classes} to={href} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  )
}

export default BottomMenu
