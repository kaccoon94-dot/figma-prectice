import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './MobileMenu.css'
import Logo from '../image/Logo.jsx'
import MenuTab from '../button/MenuTab.jsx'
import BottomMenu from './BottomMenu.jsx'
import CloseIcon from '../icon/CloseIcon.jsx'
import SearchIcon from '../icon/SearchIcon.jsx'

/*
 * Figma「모바일_메뉴」메뉴탭 7개 + 「하단메뉴」(334:4081)
 * - items: 탭을 눌렀을 때 펼쳐지는 하위 메뉴 (Figma에는 '현충원 소개'만 있음)
 * - href: 하위 메뉴 없이 바로 이동하는 탭 (Figma에서 화살표 아이콘 없는 '신청서양식')
 * 주소는 실제 페이지가 생기면 바꿉니다.
 */
const DEFAULT_MENUS = [
  {
    label: '현충원 소개',
    items: [
      { label: '인사말', href: '#' },
      { label: '역사, 연혁', href: '#' },
      { label: '조직, 업무', href: '#' },
      { label: '찾아오시는 길, VR 지도 안내', href: '#' },
      { label: '시설 및 이용안내, 버스 운행 안내', href: '/guide' },
    ],
  },
  { label: '알림마당', items: [] },
  { label: '안장자찾기', items: [] },
  { label: '안장신청', items: [] },
  { label: '신청마당', items: [] },
  { label: '사이트이용안내', items: [] },
  { label: '신청서양식', href: '#' },
]

/**
 * MobileMenu — Figma「모바일_메뉴」(node 334:4064)
 * 모바일 상단배너의 '메뉴' 버튼을 누르면 화면 전체를 덮으며 나타나는 메뉴입니다.
 * 사용 컴포넌트: Logo, CloseIcon, SearchIcon, MenuTab(메뉴텝), BottomMenu(하단메뉴)
 *
 * <dialog>를 showModal()로 열기 때문에 브라우저가 알아서
 *  - 키보드 초점을 메뉴 안에 가둬 주고 (뒤 화면으로 Tab 이동 안 됨)
 *  - Esc 키로 닫히게 하고
 *  - 닫히면 초점을 원래 '메뉴' 버튼으로 돌려줍니다.
 *
 * @param {boolean} open                  열림 여부
 * @param {function} onClose              닫힐 때 실행 (닫기 버튼, Esc 키)
 * @param {Array} menus                   메뉴 목록 (DEFAULT_MENUS 형식)
 */
function MobileMenu({ open = false, onClose = () => {}, menus = DEFAULT_MENUS, id = 'mobile-menu', className = '' }) {
  const dialogRef = useRef(null)
  const [expandedLabel, setExpandedLabel] = useState(null)
  const navigate = useNavigate()
  const classes = ['mobile-menu', className].filter(Boolean).join(' ')

  // open 값에 맞춰 dialog를 열고 닫음
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // 펼친 탭을 한 번 더 누르면 접고, 다른 탭을 누르면 그 탭만 펼침
  const toggle = (label) => {
    setExpandedLabel((current) => (current === label ? null : label))
  }

  // 검색하면 메뉴를 닫고 통합검색 결과(/search)로 이동
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const query = new FormData(event.currentTarget).get('q')?.toString().trim()
    if (!query) return
    onClose()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <dialog ref={dialogRef} id={id} className={classes} aria-label="전체 메뉴" onClose={onClose}>
      {/* 상단배너 — 로고 + 닫기 */}
      <div className="mobile-menu__top">
        <Logo onClick={onClose} />
        <button type="button" className="mobile-menu__close" aria-label="메뉴 닫기" onClick={onClose}>
          <CloseIcon className="mobile-menu__close-icon" />
        </button>
      </div>

      {/* 검색창 */}
      <form className="mobile-menu__search" role="search" onSubmit={handleSearchSubmit}>
        <label htmlFor={`${id}-search`} className="sr-only">
          검색어
        </label>
        <input
          id={`${id}-search`}
          name="q"
          className="mobile-menu__search-input"
          type="search"
          placeholder="검색어를 입력해주세요"
        />
        <button type="submit" className="mobile-menu__search-button" aria-label="검색">
          <SearchIcon className="mobile-menu__search-icon" />
        </button>
      </form>

      {/* 메뉴탭전체 */}
      <nav className="mobile-menu__nav" aria-label="전체 메뉴">
        <ul className="mobile-menu__list">
          {menus.map(({ label, href, items = [] }, index) => {
            const submenuId = `${id}-submenu-${index}`
            const expanded = expandedLabel === label

            return (
              <li key={label}>
                {href ? (
                  <MenuTab href={href} showIcon={false}>
                    {label}
                  </MenuTab>
                ) : (
                  <MenuTab
                    expanded={expanded}
                    aria-controls={items.length > 0 ? submenuId : undefined}
                    onClick={() => items.length > 0 && toggle(label)}
                  >
                    {label}
                  </MenuTab>
                )}

                {/* 하단메뉴 — 펼쳤을 때만 */}
                {items.length > 0 && (
                  <ul id={submenuId} className="mobile-menu__submenu" hidden={!expanded}>
                    {items.map((item) => (
                      <li key={item.label}>
                        <BottomMenu href={item.href} onClick={onClose}>
                          {item.label}
                        </BottomMenu>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </dialog>
  )
}

export default MobileMenu
