import './InnerPage.css'
import './Login.css'
import HomeShortcut from '../components/layout/HomeShortcut.jsx'
import TopBanner from '../components/layout/TopBanner.jsx'
import Divider from '../components/layout/Divider.jsx'
import Breadcrumb from '../components/layout/Breadcrumb.jsx'
import RelatedSites from '../components/layout/RelatedSites.jsx'
import Footer from '../components/layout/Footer.jsx'
import MobileLoginMethod from '../components/button/MobileLoginMethod.jsx'
import VerifyIcon from '../components/icon/VerifyIcon.jsx'
import IpinIcon from '../components/icon/IpinIcon.jsx'

/**
 * Login — Figma「모바일_로그인화면」(node 334:4087)
 * 순서: 홈바로가기 → 상단배너(로그인 버튼 없음) → 선 → 현재 위치 → 로그인 방식 선택 → 본인인증 · 아이핀 → 관련 누리집 → 풋터
 * 인증 기능은 아직 없어서 카드를 눌러도 동작하지 않습니다.
 */
function Login() {
  return (
    <div className="inner-page login-page">
      <HomeShortcut />
      <header>
        <TopBanner compact showLogin={false} />
      </header>

      <main id="main" className="inner-page__main" tabIndex={-1}>
        <div className="inner-page__divider">
          <Divider />
        </div>

        <Breadcrumb current="로그인" />

        <div className="login-page__heading">
          <h1 className="login-page__title">로그인 방식 선택</h1>
          <Divider />
        </div>

        <ul className="login-page__methods">
          <li>
            <MobileLoginMethod
              icon={VerifyIcon}
              title="휴대폰 본인인증"
              description="본인 명의의 휴대폰 본인인증을 통해 국립서울현충원 홈페이지 서비스를 이용하실 수 있습니다."
            />
          </li>
          <li>
            <MobileLoginMethod
              icon={IpinIcon}
              title="아이핀 인증"
              description="본인 명의의 아이핀 인증을 통해 국립서울현충원 홈페이지 서비스를 이용하실 수 있습니다."
            />
          </li>
        </ul>
      </main>

      <footer>
        <RelatedSites />
        <Footer />
      </footer>
    </div>
  )
}

export default Login
