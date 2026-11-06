import { Link } from 'react-router'
import './SearchTerm.css'

/**
 * SearchTerm — Figma「검색어」(node 349:10454, 단어 하나)
 * 상태: 기본 / 호버(:hover, 밑줄)
 * 누르면 그 단어로 검색 결과 페이지로 이동하므로 링크로 만듭니다.
 * 사이트 안 주소('/'로 시작)는 새로고침 없이 이동합니다.
 *
 * @param {React.ReactNode} children  검색어 (기본 "검색어")
 * @param {string} href               이동할 주소 (검색 결과 페이지)
 */
function SearchTerm({ children = '검색어', href = '#', className = '', ...rest }) {
  const classes = ['search-term', className].filter(Boolean).join(' ')

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

export default SearchTerm
