import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import './InnerPage.css'
import './UsageGuide.css'
import HomeShortcut from '../components/layout/HomeShortcut.jsx'
import TopBanner from '../components/layout/TopBanner.jsx'
import Divider from '../components/layout/Divider.jsx'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import RelatedSites from '../components/layout/RelatedSites.jsx'
import Footer from '../components/layout/Footer.jsx'
import Timetable from '../components/layout/Timetable.jsx'
import GuideTab from '../components/navigation/GuideTab.jsx'
import CloseIcon from '../components/icon/CloseIcon.jsx'
import ImageZoomIcon from '../components/icon/ImageZoomIcon.jsx'
import image04 from '../assets/images/image-04.jpg'
import busRouteMap from '../assets/images/bus-route-map.jpg'

/* ───────── 모바일_시설/이용 내용 ───────── */
const OPENING_HOURS = [
  { place: '현충원 정문', lines: ['개방시', '하절기(3 ~ 10월) 06:00 ~ 18:00', '동절기(11 ~ 2월) 07:00 ~ 18:00'] },
  { place: '민원안내실', lines: ['개방시간: 09:00 ~ 18:00(연중무휴)'] },
  { place: '현충문 안내실', lines: ['개방시간: 09:00 ~ 18:00(연중무휴)', '점심시간: 12:00 ~ 13:00'] },
  {
    place: '충혼당(봉안동 및 제례동)',
    lines: ['개방시간: 09:00 ~ 18:00(연중무휴)', '* 단, 입장은 17:30까지 가능하며 현충일 및 명절에는 조기 개방 등 탄력 운영'],
  },
  {
    place: '보훈미래관 관람 안내',
    lines: ['관람 가능시간: 09:30 ~ 17:30', '(마지막 입장시간 : 17:00)', '점심시간: 토요일, 공휴일 12:00 ~ 13:00'],
  },
]
const FACILITIES = [
  {
    name: '충혼당',
    text: '국립대전현충원은 최고급 봉안시설인 충혼당을 건립해 2021년 5월 개관했습니다. 12,350㎡ 부지에 지상 3층, 지하 1층의 연면적 9,647㎡ 규모이며, 4만 9천 기를 안장할 수 있는 봉안동과 40개의 제례실이 있는 제례동으로 구성되어 있습니다.',
  },
  {
    name: '위패 봉안실',
    text: '위패봉안실은 시신을 찾지 못한 순국선열과 호국영령의 영면을 기원하고 그 분들의 위훈을 기리기 위해 위패를 봉안한 곳으로 총 3실로 구성되어 있다.\n또한 위패는 석판에 계급, 성명 등을 기록하여 보존하고 있다.',
  },
]

/* ───────── 모바일_버스운행 내용 ───────── */
const BUS_INFO = [
  '운행시간 : 08:30 ~ 17:00(현충원역 운행종료)',
  '배차시간 : 30분 간격으로 운행',
  '기타사항 : 점심시간 운행, 무료',
  '연락처 : 010-4884-9450, 042-820-7071~2',
]
const BUS_TIMETABLE = [
  { label: '오전', times: ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'] },
  { label: '오후', times: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '15:00'] },
]
const BUS_NOTICES = [
  '보훈모시미는 1년 365일 운행합니다. ※ 현충일은 07:00~14:00 월드컵역 7번 출구에서 운행, 14:00~17:00 현충원역 2번 출구에서 운행',
  '묘역에서 20m 이내 거리에 가까운 승강장이 있습니다.',
  '참배를 마친 후에 내린 장소에서 타시면 편리합니다.',
  '타실 때는 승강장을 이용해 주시기 바랍니다.',
  '승강장에서 멀리 있는 묘역은 승차 시에 말씀해 주시기 바랍니다.',
  '현충원 내에서도 승차하실 수 있습니다.',
  '보훈모시미를 타고 현충원 내를 관람하실 수 있습니다.',
]

function FacilityContent() {
  return (
    <>
      <div className="usage-guide__image usage-guide__image--facility">
        <img src={image04} alt="국립대전현충원 시설 안내도" />
      </div>

      <section className="usage-guide__section" aria-labelledby="usage-guide-hours">
        <h2 id="usage-guide-hours" className="usage-guide__heading">
          국립대전현충원 이용안내
        </h2>
        <dl className="usage-guide__hours">
          {OPENING_HOURS.map(({ place, lines }) => (
            <div key={place}>
              <dt>{place}</dt>
              {lines.map((line) => (
                <dd key={line}>{line}</dd>
              ))}
            </div>
          ))}
        </dl>

        <div className="usage-guide__divider">
          <Divider />
        </div>

        <h2 className="usage-guide__heading">국립대전현충원 시설안내</h2>
        <div className="usage-guide__facility">
          <h3 className="usage-guide__facility-group">안장시설</h3>
          {FACILITIES.map(({ name, text }) => (
            <div key={name}>
              <h4 className="usage-guide__facility-name">{name}</h4>
              <p className="usage-guide__facility-text">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function BusContent() {
  const dialogRef = useRef(null)
  const mapRef = useRef(null)
  const dragRef = useRef(null)
  const [zoomOpen, setZoomOpen] = useState(false)

  /* 지도를 가운데로 — 지도 영역을 가로·세로 가운데까지 스크롤 */
  const centerMap = () => {
    const map = mapRef.current
    if (!map) return
    map.scrollLeft = (map.scrollWidth - map.clientWidth) / 2
    map.scrollTop = (map.scrollHeight - map.clientHeight) / 2
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (zoomOpen && !dialog.open) {
      dialog.showModal()
      centerMap()
    }
    if (!zoomOpen && dialog.open) dialog.close()
  }, [zoomOpen])

  /* 지도 끌어서 이동 — 마우스(클릭)·손가락(터치) 모두 같은 방식 */
  const handlePointerDown = (e) => {
    const map = mapRef.current
    dragRef.current = { x: e.clientX, y: e.clientY, left: map.scrollLeft, top: map.scrollTop }
    map.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    const drag = dragRef.current
    if (!drag) return
    const map = mapRef.current
    map.scrollLeft = drag.left - (e.clientX - drag.x)
    map.scrollTop = drag.top - (e.clientY - drag.y)
  }

  const handlePointerUp = () => {
    dragRef.current = null
  }

  return (
    <>
      <div className="usage-guide__image usage-guide__image--bus">
        <img src={busRouteMap} alt="보훈모시미 셔틀버스 노선도 (아래 '지도확대'로 크게 볼 수 있음)" />
      </div>

      {/* 이용안내 + 지도확대 */}
      <div className="usage-guide__bus-head">
        <h2 className="usage-guide__heading">이용안내</h2>
        <button
          type="button"
          className="usage-guide__zoom-button"
          aria-haspopup="dialog"
          onClick={() => setZoomOpen(true)}
        >
          <ImageZoomIcon />
          <span className="usage-guide__zoom-label">지도확대</span>
        </button>
      </div>
      <ul className="usage-guide__bullets">
        {BUS_INFO.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="usage-guide__divider">
        <Divider />
      </div>
      <h2 className="usage-guide__heading usage-guide__heading--padded">운행시간표</h2>
      <Timetable rows={BUS_TIMETABLE} />

      <div className="usage-guide__divider">
        <Divider />
      </div>
      <h2 className="usage-guide__heading usage-guide__heading--padded">공지사항</h2>
      <ul className="usage-guide__bullets">
        {BUS_NOTICES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* 모바일_버스운행_지도확대 — 화면 전체 확대 보기, 지도는 손가락으로 밀어서 이동 */}
      <dialog ref={dialogRef} className="usage-guide__zoom" aria-labelledby="usage-guide-zoom-title" onClose={() => setZoomOpen(false)}>
        <div className="usage-guide__zoom-bar">
          <h2 id="usage-guide-zoom-title" className="usage-guide__zoom-title">
            버스 운행 안내
          </h2>
          <button type="button" className="usage-guide__zoom-close" aria-label="지도 확대 닫기" onClick={() => setZoomOpen(false)}>
            <CloseIcon className="usage-guide__zoom-close-icon" />
          </button>
        </div>
        <div
          ref={mapRef}
          className="usage-guide__zoom-map"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* 이미지가 늦게 불러와져도 다 그려진 뒤 다시 가운데로 */}
          <img src={busRouteMap} alt="보훈모시미 셔틀버스 노선도 확대" draggable={false} onLoad={centerMap} />
        </div>
      </dialog>
    </>
  )
}

/**
 * UsageGuide — Figma「모바일_시설/이용」(334:4006) · 「모바일_버스운행」(334:4396) · 「모바일_버스운행_지도확대」(334:4262)
 * 주소: /guide (이용 및 시설 안내) · /guide/bus (버스운행)
 */
function UsageGuide() {
  const { pathname } = useLocation()
  const isBus = pathname === '/guide/bus'

  return (
    <div className="inner-page usage-guide">
      <HomeShortcut />
      <header>
        <TopBanner compact />
      </header>

      <main id="main" className="inner-page__main" tabIndex={-1}>
        <Breadcrumb current="이용안내" />
        <GuideTab current={isBus ? '/guide/bus' : '/guide'} />

        {/* 안내탭하단 — 지금 탭 제목 */}
        <h1 className="usage-guide__title">{isBus ? '버스 운행 안내' : '이용 및 시설 안내'}</h1>

        {isBus ? <BusContent /> : <FacilityContent />}
      </main>

      <footer>
        <RelatedSites />
        <Footer />
      </footer>
    </div>
  )
}

export default UsageGuide
