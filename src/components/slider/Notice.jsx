import { useState } from 'react'
import './Notice.css'
import NoticeNotification from '../card/NoticeNotification.jsx'
import Icon11 from '../icon/Icon11.jsx'
import Icon12 from '../icon/Icon12.jsx'
import image03 from '../../assets/images/image-03.jpg'
import image02 from '../../assets/images/header-image-02.jpg' // Figma 이미지02 = 헤더이미지02와 같은 파일
import hospitalDirectorMemorialTowerVisit from '../../assets/images/hospital-director-memorial-tower-visit.jpg'

/* Figma 예시 내용 (공지01~03) — 실제 데이터는 items로 넘겨 바꿉니다 */
const DEFAULT_ITEMS = [
  {
    title: '현충원 방문시 유의사항',
    description: '우리 현충원은 다음과 같은 사항들을 금지하고 있습니다.',
    image: image03,
  },
  { title: '캠페인', description: '플라시특 조화 감축 캠페인을 실시합니다.', image: image02 },
  { title: '업무협약', description: '국립대전현충원·육군 제32보별사단 업무협약', image: hospitalDirectorMemorialTowerVisit },
]

/**
 * Notice — Figma「공지」(node 797:2397)
 * 종류: 공지01 / 공지02 / 공지03 → 보고 있는 순서(첫째/가운데/마지막)
 * 사용 컴포넌트: NoticeNotification(공지,알림), Icon11(이전), Icon12(다음)
 *
 * 이전·다음 버튼으로 한 장씩 넘겨 봅니다. 처음/마지막에서는 해당 버튼이 비활성(배경 없음).
 * 비활성은 disabled 대신 aria-disabled를 써서 키보드 초점이 사라지지 않게 합니다.
 *
 * @param {Array<{title, description, image, imageAlt, href}>} items  공지 목록
 * @param {string} label  영역 이름 (스크린리더용, 기본 "공지")
 * @param {Array} desktopItems  데스크탑(1280px 이상)에서 한 줄로 보여줄 카드 (기본 = items)
 *
 * 데스크탑(1280px 이상): 이전·다음 버튼 없이 카드를 한 줄에 모두 보여줌 (Figma 데스크탑_메인)
 */
function Notice({ items = DEFAULT_ITEMS, desktopItems = items, label = '공지', className = '', ...rest }) {
  const [index, setIndex] = useState(0)
  const classes = ['notice', className].filter(Boolean).join(' ')
  const item = items[index]
  const isFirst = index === 0
  const isLast = index === items.length - 1

  if (!item) return null

  return (
    <section className={classes} aria-label={label} {...rest}>
      {/* 모바일 — 한 장씩 넘겨 보기 */}
      <div className="notice__slider">
        {/* 넘길 때 바뀐 내용을 스크린리더가 읽어 줌 */}
        <div className="notice__card" aria-live="polite">
          <span className="sr-only">{`${items.length}개 중 ${index + 1}번째`}</span>
          <NoticeNotification {...item} />
        </div>
        <div className="notice__buttons">
          <button
            type="button"
            className="notice__button"
            aria-label={`이전 ${label}`}
            aria-disabled={isFirst}
            onClick={() => !isFirst && setIndex(index - 1)}
          >
            <Icon11 />
          </button>
          <button
            type="button"
            className="notice__button"
            aria-label={`다음 ${label}`}
            aria-disabled={isLast}
            onClick={() => !isLast && setIndex(index + 1)}
          >
            <Icon12 />
          </button>
        </div>
      </div>

      {/* 데스크탑 — 카드 한 줄 */}
      <ul className="notice__list">
        {desktopItems.map((desktopItem, i) => (
          <li key={`${i}-${desktopItem.title}`} className="notice__list-item">
            <NoticeNotification {...desktopItem} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notice
