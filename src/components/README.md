# components — 재사용 컴포넌트

Figma 파일 `국립대전현충원개선` (fileKey `JjCVeUo7AVTkKV2S1sc2uk`)의 컴포넌트를 코드로 옮긴 것입니다.

## 규칙

- 컴포넌트 하나 = `이름.jsx` + `이름.css` 한 쌍 (아이콘은 `icon/icons.css` 하나를 같이 씀)
- 이름은 Figma 이름을 영어로 번역 (각 파일 맨 위 주석에 Figma 원래 이름과 노드 번호)
- 색상·간격·크기·폰트는 `src/styles/tokens.css`의 변수만 사용
- 이미지·아이콘 파일은 `src/assets/` (설명은 `src/assets/README.md`)

## 폴더 (종류별)

| 폴더 | 종류 | 컴포넌트 (Figma 이름) |
|---|---|---|
| `button/` | 버튼 (`<button>`) | `MenuTab` (메뉴텝), `MobileLoginMethod` (모바일로그인방식), `SearchTermDelete` (검색어삭제) |
| `navigation/` | 페이지 이동 메뉴 (`<a>`) | `HeaderMenu` (헤더메뉴), `BottomMenu` (하단메뉴), `DesktopTopMenu` (데스크탑상단메뉴), `IconLogin` (아이콘), `MobileMenu` (모바일_메뉴 — 메뉴 버튼으로 여는 전체 메뉴), `GuideTab` (안내탭) |
| `card/` | 카드 | `NoticeNotification` (공지,알림), `MediaNewsCard` (미디어소식카드) |
| `slider/` | 넘겨 보는 목록 | `Notice` (공지), `Notification` (알림), `CardView` (카드뷰), `MemorialMessageCard` (추모의글 카드) |
| `search/` | 검색 | `SearchTerm` (검색어), `SearchTermRanking` (검색어 — 많이 찾은 검색어 목록), `SearchBox` (검색창), `SearchTypeTab` (메뉴/게시글), `SearchResultItem` (통합검색 결과 한 줄) |
| `image/` | 이미지 | `HeaderImage` (헤더이미지), `Logo` (로고 — 상단배너), `FooterLogo` (로고 — 풋터), `HeaderTimeGuide` (헤더시간안내 — 데스크탑) |
| `layout/` | 화면 공통 영역 | `TopBanner` (상단배너), `RelatedSites` (관련누리집), `Footer` (풋터), `Divider` (Divider), `HomeShortcut` (홈바로가기), `Breadcrumb` (모바일안내 — 현재 위치), `ListOneLine` (List - One Line), `Timetable` (오전·오후 시간표), `SearchOverlay` (모바일_검색화면 — 통합검색 버튼으로 여는 창) |
| `icon/` | 아이콘 | `LoginIcon`, `SearchIcon`, `MenuIcon`, `MoreIcon`, `BurialRequestIcon`, `RelocationRequestIcon`, `BurialSearchIcon`, `UsageGuideIcon`, `MemorialMessageWriteIcon`, `VolunteerApplicationIcon`, `ClockIcon`, `VerifyIcon`, `MobileMenuMoreIcon`, `CloseIcon`, `IpinIcon`, `ImageZoomIcon`, `Icon11`, `Icon12`, `InstagramIcon`, `YoutubeIcon`, `FacebookIcon` |

## 의존 관계 (먼저 만들어야 하는 것 → 그것을 쓰는 것)

```
icon/MobileMenuMoreIcon ─→ button/MenuTab
icon/VerifyIcon         ─→ button/MobileLoginMethod (아이콘은 icon 값으로 바꿀 수 있음, 예: IpinIcon)
icon/CloseIcon          ─→ button/SearchTermDelete
image/Logo + icon/CloseIcon, SearchIcon + button/MenuTab + navigation/BottomMenu ─→ navigation/MobileMenu
icon/BurialRequestIcon  ─→ navigation/HeaderMenu
icon/LoginIcon          ─→ navigation/IconLogin (아이콘은 icon 값으로 바꿀 수 있음)
icon/BurialRequestIcon 외 3개 ─→ navigation/HeaderMenu (icon 값)
layout/Divider          ─→ layout/ListOneLine
icon/CloseIcon + layout/ListOneLine + search/SearchBox + search/SearchTermRanking ─→ layout/SearchOverlay
icon/SearchIcon         ─→ search/SearchBox
image/Logo + navigation/IconLogin × 3 (+ icon/SearchIcon, MenuIcon) + navigation/MobileMenu + layout/SearchOverlay ─→ layout/TopBanner
icon/MoreIcon           ─→ layout/RelatedSites
image/FooterLogo + icon/InstagramIcon, YoutubeIcon, FacebookIcon ─→ layout/Footer
search/SearchTerm       ─→ search/SearchTermRanking
card/NoticeNotification ─┬→ slider/Notice        (+ icon/Icon11, icon/Icon12)
                         └→ slider/Notification  (+ icon/Icon11, icon/Icon12)
card/MediaNewsCard      ─→ slider/CardView
icon/Icon11, Icon12     ─→ slider/MemorialMessageCard
```

## 반응형

- 브레이크포인트 1 곳: `@media (min-width: 1280px)` (데스크탑 시안 프레임 너비). 그보다 좁으면 모바일 레이아웃
- 데스크탑 스타일이 있는 컴포넌트: `TopBanner`, `RelatedSites`, `Footer`, `Notice`, `Notification`
- 1280px보다 넓은 화면: 내용은 가운데 1280px(`--size-1280`), 배경은 화면 전체

## 불러오는 방법 (예)

```jsx
import MenuTab from './components/button/MenuTab.jsx'
import Notice from './components/slider/Notice.jsx'
```

## 화면 (src/pages)

| 파일 | Figma | 조립한 컴포넌트 |
|---|---|---|
| `Main.jsx` (`/`) | 모바일_메인 (334:4481) + 데스크탑_메인 (334:5034) | TopBanner, MobileMenu, HeaderImage, HeaderMenu × 4, Divider, Notice, Notification, CardView, MemorialMessageCard, RelatedSites, Footer |
| `Login.jsx` (`/login`) | 모바일_로그인화면 (334:4087) | HomeShortcut, TopBanner(compact, 로그인 버튼 없음), Breadcrumb, MobileLoginMethod × 2, RelatedSites, Footer |
| `SearchResult.jsx` (`/search?q=&type=menu|post`) | 모바일_검색화면 A_1·A_2·B_1·B_2 | HomeShortcut, TopBanner, Breadcrumb, SearchTypeTab, SearchBox, SearchResultItem, Divider, RelatedSites, Footer |
| `UsageGuide.jsx` (`/guide`, `/guide/bus`) | 모바일_시설/이용 · 모바일_버스운행 · 버스운행_지도확대 | HomeShortcut, TopBanner, Breadcrumb, GuideTab, Timetable, Divider, ImageZoomIcon, CloseIcon, RelatedSites, Footer |

- 내부 화면 공통 배치는 `pages/InnerPage.css`
- 메뉴(모바일_메뉴)·검색 창(모바일_검색화면)은 상단배너 버튼으로 열림 (`<dialog>` — 초점 가둠, Esc로 닫힘)
