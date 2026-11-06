import './SearchTermDelete.css'
import CloseIcon from '../icon/CloseIcon.jsx'

/**
 * SearchTermDelete — Figma「검색어삭제」(node 349:10757)
 * 상태: 기본 / 클릭(:active, 점선 테두리)
 * 사용 컴포넌트: CloseIcon(닫기아이콘)
 *
 * @param {React.ReactNode} children  버튼 글자 (기본 "검색어 전체삭제")
 * @param {function} onClick          눌렀을 때 실행할 함수 (검색어 지우기)
 */
function SearchTermDelete({ children = '검색어 전체삭제', onClick, className = '', ...rest }) {
  const classes = ['search-term-delete', className].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
      <CloseIcon />
    </button>
  )
}

export default SearchTermDelete
