import { Link } from 'react-router'
import './SearchResultItem.css'

/* 제목에서 검색어와 같은 부분을 <mark>로 감쌈 (대소문자 무시) */
function highlight(text, query) {
  if (!query) return text
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const parts = []
  let start = 0
  let found = lower.indexOf(q)
  while (found !== -1) {
    if (found > start) parts.push(text.slice(start, found))
    parts.push(
      <mark key={found} className="search-result-item__mark">
        {text.slice(found, found + q.length)}
      </mark>,
    )
    start = found + q.length
    found = lower.indexOf(q, start)
  }
  if (start < text.length) parts.push(text.slice(start))
  return parts
}

/**
 * SearchResultItem — Figma 통합검색 결과 한 줄 (모바일_검색화면 A_1 메뉴 결과 / A_2 게시글 결과)
 * 검색어와 같은 글자는 파란 밑줄로 강조합니다 (색 + 밑줄 — 색에만 의존하지 않음).
 *
 * @param {string} title        결과 제목
 * @param {string} description  게시글 요약 (게시글 결과만, 2줄까지)
 * @param {string} query        검색어 (강조할 글자)
 * @param {string} to           이동할 주소
 */
function SearchResultItem({ title, description, query = '', to = '#', className = '', ...rest }) {
  const classes = ['search-result-item', description ? 'search-result-item--post' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classes} {...rest}>
      <h2 className="search-result-item__title">
        <Link className="search-result-item__link" to={to}>
          {highlight(title, query)}
        </Link>
      </h2>
      {description && <p className="search-result-item__desc">{highlight(description, query)}</p>}
    </article>
  )
}

export default SearchResultItem
