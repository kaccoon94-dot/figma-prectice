import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchOverlay.css'
import CloseIcon from '../icon/CloseIcon.jsx'
import ListOneLine from './ListOneLine.jsx'
import SearchBox from '../search/SearchBox.jsx'
import SearchTermRanking from '../search/SearchTermRanking.jsx'
import SearchTerm from '../search/SearchTerm.jsx'
import SearchTermDelete from '../button/SearchTermDelete.jsx'

/* 내가 찾은 검색어 — 이 브라우저에만 저장 (저장이 막힌 환경에서도 화면은 그대로 동작) */
const RECENT_KEY = 'recent-search-terms'
const RECENT_MAX = 10

function loadRecent() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(RECENT_KEY) ?? '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function saveRecent(terms) {
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(terms))
  } catch {
    /* 저장에 실패해도 화면 동작에는 영향 없음 */
  }
}

/**
 * SearchOverlay — Figma「모바일_검색화면」(node 334:4384) · 「데스크탑_검색화면」(node 334:4863)
 * 사용 컴포넌트: CloseIcon(닫기아이콘), ListOneLine(List - One Line), SearchBox(검색창),
 *               SearchTermRanking(검색어), SearchTerm(검색어 단어), SearchTermDelete(검색어삭제)
 *
 * 화면 전체를 덮는 <dialog>입니다.
 * - '검색어를 입력해주세요'는 검색창의 <label>
 * - 검색하거나 많이 찾은 검색어를 누르면 창을 닫고 통합검색 결과(/search)로 이동
 * - 데스크탑(1280px 이상)에서는 오른쪽에 '내가 찾은 검색어'(최근 검색어 + 검색어 전체삭제)가 함께 보임
 *
 * @param {boolean} open      열림 여부
 * @param {function} onClose  닫을 때 실행할 함수
 */
function SearchOverlay({ id, open = false, onClose = () => {}, className = '' }) {
  const dialogRef = useRef(null)
  const inputId = useId()
  const recentTitleId = useId()
  const navigate = useNavigate()
  const [recent, setRecent] = useState(loadRecent)
  const classes = ['search-overlay', className].filter(Boolean).join(' ')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleSearch = (query) => {
    const next = [query, ...recent.filter((term) => term !== query)].slice(0, RECENT_MAX)
    setRecent(next)
    saveRecent(next)
    onClose()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  const clearRecent = () => {
    setRecent([])
    saveRecent([])
  }

  const getHref = (term) => `/search?q=${encodeURIComponent(term)}`

  return (
    <dialog id={id} ref={dialogRef} className={classes} aria-label="통합검색" onClose={onClose}>
      {/* 검색창끄기 */}
      <div className="search-overlay__top">
        <button type="button" className="search-overlay__close" aria-label="검색 닫기" onClick={onClose}>
          <CloseIcon className="search-overlay__close-icon" />
        </button>
      </div>

      {/* 검색어를 입력해주세요 + 검색창 */}
      <div className="search-overlay__field">
        <ListOneLine htmlFor={inputId}>검색어를 입력해주세요</ListOneLine>
      </div>
      <div className="search-overlay__field">
        <SearchBox inputId={inputId} onSearch={handleSearch} />
      </div>

      {/* 선 */}
      <div className="search-overlay__divider" />

      {/* 검색어 — 많이 찾은 검색어 | (데스크탑) 내가 찾은 검색어 */}
      <div className="search-overlay__terms">
        <div className="search-overlay__ranking">
          <SearchTermRanking getHref={getHref} onTermClick={onClose} />
        </div>

        <section className="search-overlay__recent" aria-labelledby={recentTitleId}>
          <div className="search-overlay__recent-header">
            <h2 id={recentTitleId} className="search-overlay__recent-title">
              내가 찾은 검색어
            </h2>
            <SearchTermDelete onClick={clearRecent} />
          </div>
          {recent.length > 0 && (
            <ul className="search-overlay__recent-list">
              {recent.map((term) => (
                <li key={term}>
                  <SearchTerm href={getHref(term)} onClick={onClose}>
                    {term}
                  </SearchTerm>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </dialog>
  )
}

export default SearchOverlay
