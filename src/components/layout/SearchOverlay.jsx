import { useEffect, useId, useRef } from 'react'
import { useNavigate } from 'react-router'
import './SearchOverlay.css'
import CloseIcon from '../icon/CloseIcon.jsx'
import ListOneLine from './ListOneLine.jsx'
import SearchBox from '../search/SearchBox.jsx'
import SearchTermRanking from '../search/SearchTermRanking.jsx'

/**
 * SearchOverlay — Figma「모바일_검색화면」(node 334:4384)
 * 사용 컴포넌트: CloseIcon(닫기아이콘), ListOneLine(List - One Line), SearchBox(검색창), SearchTermRanking(검색어)
 *
 * 화면 전체를 덮는 <dialog>입니다.
 * - '검색어를 입력해주세요'는 검색창의 <label>
 * - 검색하거나 많이 찾은 검색어를 누르면 창을 닫고 통합검색 결과(/search)로 이동
 *
 * @param {boolean} open      열림 여부
 * @param {function} onClose  닫을 때 실행할 함수
 */
function SearchOverlay({ id, open = false, onClose = () => {}, className = '' }) {
  const dialogRef = useRef(null)
  const inputId = useId()
  const navigate = useNavigate()
  const classes = ['search-overlay', className].filter(Boolean).join(' ')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleSearch = (query) => {
    onClose()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

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

      {/* 인기검색어 */}
      <div className="search-overlay__ranking">
        <SearchTermRanking
          getHref={(term) => `/search?q=${encodeURIComponent(term)}`}
          onTermClick={onClose}
        />
      </div>
    </dialog>
  )
}

export default SearchOverlay
