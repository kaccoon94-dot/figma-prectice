import { useId, useState } from 'react'
import './RelatedSites.css'
import MoreIcon from '../icon/MoreIcon.jsx'

/**
 * RelatedSites — Figma「관련누리집」(모바일 화면 공통 프레임)
 * 사용 컴포넌트: MoreIcon(더보기아이콘)
 *
 * '관련 누리집' 막대를 누르면 sites 목록이 펼쳐집니다 (aria-expanded로 상태 안내).
 * Figma에는 펼친 모습이 없어서, 목록은 sites로 넘긴 링크만 간단히 보여줍니다.
 *
 * @param {Array<{label: string, href: string}>} sites  관련 누리집 목록
 */
function RelatedSites({ sites = [], className = '', ...rest }) {
  const [open, setOpen] = useState(false)
  const listId = useId()
  const classes = ['related-sites', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      <button
        type="button"
        className="related-sites__button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
      >
        관련 누리집
        <MoreIcon />
      </button>
      <ul id={listId} className="related-sites__list" hidden={!open}>
        {sites.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedSites
