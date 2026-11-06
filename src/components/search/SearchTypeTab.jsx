import { Link } from 'react-router'
import './SearchTypeTab.css'

const TYPES = [
  { value: 'menu', label: '메뉴' },
  { value: 'post', label: '게시글' },
]

/**
 * SearchTypeTab — Figma「메뉴/게시글」(통합검색 결과 종류 선택)
 * 종류마다 주소(?type=menu / ?type=post)가 달라서 링크로 만들고,
 * 지금 보고 있는 쪽은 aria-current="page"로 표시합니다.
 *
 * @param {'menu'|'post'} type  지금 선택된 종류
 * @param {string} query       검색어 (링크 주소에 함께 넣음)
 */
function SearchTypeTab({ type = 'menu', query = '', className = '', ...rest }) {
  const classes = ['search-type-tab', className].filter(Boolean).join(' ')

  return (
    <nav className={classes} aria-label="검색 결과 종류" {...rest}>
      <ul className="search-type-tab__list">
        {TYPES.map(({ value, label }) => (
          <li key={value} className="search-type-tab__item">
            <Link
              className="search-type-tab__link"
              to={`/search?q=${encodeURIComponent(query)}&type=${value}`}
              aria-current={type === value ? 'page' : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SearchTypeTab
