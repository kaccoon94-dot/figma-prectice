import { useState } from 'react'
import './Main.css'
import TopBanner from '../components/layout/TopBanner.jsx'
import MobileMenu from '../components/navigation/MobileMenu.jsx'
import Divider from '../components/layout/Divider.jsx'
import RelatedSites from '../components/layout/RelatedSites.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeaderImage from '../components/image/HeaderImage.jsx'
import HeaderTimeGuide from '../components/image/HeaderTimeGuide.jsx'
import HeaderMenu from '../components/navigation/HeaderMenu.jsx'
import Notice from '../components/slider/Notice.jsx'
import Notification from '../components/slider/Notification.jsx'
import CardView from '../components/slider/CardView.jsx'
import MemorialMessageCard from '../components/slider/MemorialMessageCard.jsx'
import BurialRequestIcon from '../components/icon/BurialRequestIcon.jsx'
import RelocationRequestIcon from '../components/icon/RelocationRequestIcon.jsx'
import BurialSearchIcon from '../components/icon/BurialSearchIcon.jsx'
import UsageGuideIcon from '../components/icon/UsageGuideIcon.jsx'
import MemorialMessageWriteIcon from '../components/icon/MemorialMessageWriteIcon.jsx'
import VolunteerApplicationIcon from '../components/icon/VolunteerApplicationIcon.jsx'
import memorialMessageBackground from '../assets/images/memorial-message-background.jpg'
import headerImage01 from '../assets/images/header-image-01.jpg'
import headerImage02 from '../assets/images/header-image-02.jpg'
import image03 from '../assets/images/image-03.jpg'
import image04 from '../assets/images/image-04.jpg'
import hospitalDirectorMemorialTowerVisit from '../assets/images/hospital-director-memorial-tower-visit.jpg'

/* 헤더메뉴 — 시안 그대로 모바일 4개 / 데스크탑 6개 (주소는 실제 페이지가 생기면 바꿉니다) */
const MOBILE_HEADER_MENUS = [
  { label: '안장신청', icon: BurialRequestIcon, href: '#' },
  { label: '이장신청', icon: RelocationRequestIcon, href: '#' },
  { label: '안장자찾기', icon: BurialSearchIcon, href: '#' },
  { label: '이용안내', icon: UsageGuideIcon, href: '#' },
]
const DESKTOP_HEADER_MENUS = [
  { label: '안장안내', icon: BurialRequestIcon, href: '#' },
  { label: '이장안내', icon: RelocationRequestIcon, href: '#' },
  { label: '안장자찾기', icon: BurialSearchIcon, href: '#' },
  { label: '참배추모', icon: MemorialMessageWriteIcon, href: '#' },
  { label: '봉사신청', icon: VolunteerApplicationIcon, href: '#' },
  { label: '이용안내', icon: UsageGuideIcon, href: '#' },
]

/* 데스크탑 공지·알림 카드 3장 — Figma 데스크탑_메인 내용 그대로 */
const DESKTOP_NOTICES = [
  { title: '현충원 방문시 유의사항', description: '우리 현충원은 다음과 같은 사항들을 금지하고 있습니다.', image: image03 },
  { title: '캠페인', description: '플라스틱 조화 감축 캠페인을 실시합니다.', image: headerImage02 },
  { title: '업무협약', description: '국립대전현충원·육군 제32보별사단 업무협약', image: hospitalDirectorMemorialTowerVisit },
]
const DESKTOP_NOTIFICATIONS = [
  { title: '공모전', description: '나라사랑 체험소감 공모전\n2026.04.20-2026.10.31', image: headerImage01 },
  { title: '[보훈둘레길]', description: '호우특보 해제에 따른 보훈 둘레길 개방 알림', image: image04 },
  { title: '사진 받아보기 서비스', description: '안장자 묘소/혼충당 (실내 봉안시설) 사진 받아보기 서비스', image: image03 },
]

function HeaderMenuList({ menus, className }) {
  return (
    <nav className={`main-page__header-menus ${className}`} aria-label="주요 서비스">
      <ul className="main-page__header-menu-list">
        {menus.map(({ label, icon, href }) => (
          <li key={label}>
            <HeaderMenu icon={icon} href={href}>
              {label}
            </HeaderMenu>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Main — Figma「모바일_메인」(334:4481) + 「데스크탑_메인」(334:5034)
 * 브레이크포인트: 1280px (데스크탑 시안 프레임 너비) — 그보다 좁으면 모바일 레이아웃
 * 순서: 상단배너 → 헤더이미지(+개방시간 안내) → 헤더메뉴 → 공지의 글 → 알림의 글 → 미디어 소식 → 추모의 글 → 관련 누리집 → 풋터
 */
function Main() {
  // 모바일 메뉴(Figma「모바일_메뉴」) 열림 여부 — 상단배너 '메뉴' 버튼으로 열고, 닫기(✕)·Esc로 닫음
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="main-page">
      <header>
        <TopBanner menuId="mobile-menu" onMenuClick={() => setIsMenuOpen(true)} />
        <MobileMenu id="mobile-menu" open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      <main id="main" tabIndex={-1}>
        <h1 className="sr-only">국립대전현충원</h1>

        {/* 헤더이미지 + 헤더시간안내(데스크탑) */}
        <div className="main-page__hero">
          <HeaderImage variant="01" alt="국립대전현충원 현충문" />
          <HeaderTimeGuide className="main-page__time-guide" />
        </div>

        {/* 헤더메뉴 — 모바일 4개 / 데스크탑 6개 중 하나만 보임 */}
        <HeaderMenuList menus={MOBILE_HEADER_MENUS} className="main-page__mobile-only" />
        <HeaderMenuList menus={DESKTOP_HEADER_MENUS} className="main-page__desktop-only" />

        <div className="main-page__divider">
          <Divider />
        </div>

        {/* 공지의 글 */}
        <section aria-labelledby="main-page-notice">
          <h2 id="main-page-notice" className="main-page__title">
            공지의 글
          </h2>
          <div className="main-page__slider">
            <Notice desktopItems={DESKTOP_NOTICES} />
          </div>
        </section>

        <div className="main-page__divider">
          <Divider />
        </div>

        {/* 알림의 글 */}
        <section aria-labelledby="main-page-notification">
          <h2 id="main-page-notification" className="main-page__title">
            알림의 글
          </h2>
          <div className="main-page__slider">
            <Notification desktopItems={DESKTOP_NOTIFICATIONS} />
          </div>
        </section>

        {/* 미디어소식 */}
        <section className="main-page__media" aria-labelledby="main-page-media">
          <h2 id="main-page-media" className="main-page__title main-page__title--media">
            미디어 소식
          </h2>
          <div className="main-page__card-view">
            <CardView />
          </div>
        </section>

        {/* 추모의글 — 배경 사진은 꾸밈용이라 CSS 배경으로 넣음 */}
        <section
          className="main-page__memorial"
          aria-labelledby="main-page-memorial"
          style={{ '--memorial-background': `url("${memorialMessageBackground}")` }}
        >
          <div className="main-page__memorial-heading">
            <h2 id="main-page-memorial" className="main-page__memorial-title">
              추모의 글
            </h2>
            <p className="main-page__memorial-text">
              대한민국을 지켜냈던
              <br />
              그대들의 정신을 잊지 않겠습니다.
            </p>
          </div>
          <div className="main-page__memorial-card">
            <MemorialMessageCard />
          </div>
        </section>
      </main>

      {/* 누리집/풋터 */}
      <footer>
        <RelatedSites />
        <Footer />
      </footer>
    </div>
  )
}

export default Main
