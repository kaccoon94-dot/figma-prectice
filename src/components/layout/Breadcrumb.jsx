import { Link } from 'react-router'
import './Breadcrumb.css'

/**
 * Breadcrumb — Figma「모바일안내」(현재 위치: 홈 > · · · > 화면 이름)
 * 스크린리더가 '현재 위치' 목록으로 읽고, 마지막 항목은 aria-current="page"로 표시합니다.
 *
 * @param {React.ReactNode} current  지금 화면 이름 (예: "로그인")
 */
function Breadcrumb({ current, className = '', ...rest }) {
  const classes = ['breadcrumb', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="현재 위치" {...rest}>
      <ol className="breadcrumb__list">
        <li>
          <Link className="breadcrumb__home" to="/">
            홈
          </Link>
        </li>
        {/* Figma: '> · · · >' — 중간 단계 생략 표시 */}
        <li aria-hidden="true">&gt; · · · &gt;</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
