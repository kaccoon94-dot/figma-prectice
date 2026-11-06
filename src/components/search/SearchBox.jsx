import { useId, useState } from 'react'
import { useNavigate } from 'react-router'
import './SearchBox.css'
import SearchIcon from '../icon/SearchIcon.jsx'

/**
 * SearchBox — Figma「검색창」(입력칸 + 검색아이콘 버튼)
 * 사용 컴포넌트: SearchIcon(검색아이콘)
 *
 * <form role="search">로 만들고, 입력칸은 <label>과 연결합니다.
 * 검색 버튼(또는 Enter)을 누르면 onSearch(검색어)를 실행합니다.
 * onSearch가 없으면 통합검색 결과 화면(/search?q=검색어)으로 이동합니다.
 *
 * @param {string} defaultValue  처음 입력칸에 들어 있을 검색어
 * @param {string} label         입력칸 이름 (화면에는 숨기고 스크린리더만 읽음, 기본 "검색어")
 * @param {string} inputId       바깥에 보이는 <label for>와 연결할 때 쓰는 id
 * @param {function} onSearch    검색 실행 함수 (검색어를 받음)
 */
function SearchBox({ defaultValue = '', label = '검색어', inputId, onSearch, className = '', ...rest }) {
  const autoId = useId()
  const id = inputId ?? autoId
  const [value, setValue] = useState(defaultValue)
  const navigate = useNavigate()
  const classes = ['search-box', className].filter(Boolean).join(' ')

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = value.trim()
    if (!query) return
    if (onSearch) onSearch(query)
    else navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form className={classes} role="search" onSubmit={handleSubmit} {...rest}>
      {/* 바깥 label을 쓰지 않을 때만 숨은 label 제공 */}
      {!inputId && (
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="search-box__input"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoComplete="off"
      />
      <button type="submit" className="search-box__button" aria-label="검색">
        <SearchIcon className="search-box__icon" />
      </button>
    </form>
  )
}

export default SearchBox
