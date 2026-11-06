import { Link } from 'react-router'
import './IconLogin.css'
import LoginIcon from '../icon/LoginIcon.jsx'

/**
 * IconLogin — Figma「아이콘」(node 132:5405, 아이콘 + 글자)
 * 상단배너의 로그인 · 통합검색 · 메뉴에 같이 씁니다. (기본은 로그인)
 * - href가 있으면 페이지 이동 링크(<a>)
 * - onClick만 있으면 화면 안 동작 버튼(<button>) — 예: 검색창·메뉴 열기
 *
 * @param {React.ReactNode} children  아이콘 아래 글자 (기본 "로그인")
 * @param {React.ComponentType} icon  아이콘 컴포넌트 (기본 LoginIcon)
 * @param {string} href               이동할 주소
 * @param {function} onClick          버튼으로 쓸 때 실행할 함수
 */
function IconLogin({ children = '로그인', icon: Icon = LoginIcon, href, onClick, className = '', ...rest }) {
  const classes = ['icon-login', className].filter(Boolean).join(' ')
  const content = (
    <>
      <Icon />
      <span className="icon-login__label">{children}</span>
    </>
  )

  if (onClick && !href) {
    return (
      <button type="button" className={classes} onClick={onClick} {...rest}>
        {content}
      </button>
    )
  }

  // 사이트 안 주소('/'로 시작)는 새로고침 없이 이동
  if (href?.startsWith('/')) {
    return (
      <Link className={classes} to={href} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a className={classes} href={href ?? '#'} onClick={onClick} {...rest}>
      {content}
    </a>
  )
}

export default IconLogin
