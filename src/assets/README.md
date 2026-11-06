# assets — 아이콘·이미지 파일

Figma 파일 `국립대전현충원개선` (fileKey `JjCVeUo7AVTkKV2S1sc2uk`)에서 받은 파일입니다.

## 폴더 규칙

| 폴더 | 넣는 것 | 형식 |
|---|---|---|
| `icons/` | 아이콘 (Figma 아이콘 컴포넌트) | PNG, 표시 크기의 3배 |
| `images/` | 사진·그림 (로고 엠블럼만 PNG) | JPG / PNG |

## 이름 규칙

- Figma 이름을 영어로 번역해 kebab-case(소문자 + `-`)로 씁니다.
- 아이콘 파일 이름 = 아이콘 컴포넌트 이름 (예: `login-icon.png` ↔ `LoginIcon`)
- 흰색 버전은 끝에 `-white`를 붙입니다.
- Figma 레이어 이름에 사람 실명이 있으면 이름은 빼고 씁니다.

## icons/

| 파일 | Figma | 표시 크기 | 사용하는 컴포넌트 |
|---|---|---|---|
| `burial-request-icon.png` / `-white` | 안장신청아이콘 (132:5385) | 20px | `icon/BurialRequestIcon` → `HeaderMenu` |
| `close-icon.png` | 닫기아이콘 (132:5389) | 28px | `icon/CloseIcon` → `SearchTermDelete` |
| `icon-11.png` / `-white` | 아이콘11 ‹ (177:7846) | 44px | `icon/Icon11` → `Notice`, `Notification`, `MemorialMessageCard` |
| `icon-12.png` / `-white` | 아이콘12 › (177:7844) | 44px | `icon/Icon12` → `Notice`, `Notification`, `MemorialMessageCard` |
| `login-icon.png` | 로그인아이콘 (132:5394) | 24px | `icon/LoginIcon` → `IconLogin` |
| `mobile-menu-more-icon.png` / `-white` | 모바일메뉴더보기아이콘 (156:6605) | 24px | `icon/MobileMenuMoreIcon` → `MenuTab` |
| `verify-icon.png` | 본인인증아이콘 (132:5381) | 20px | `icon/VerifyIcon` → `MobileLoginMethod` |
| `relocation-request-icon.png` | 이장신청아이콘 (132:5391) | 20px | `icon/RelocationRequestIcon` → `HeaderMenu` |
| `burial-search-icon.png` | 안장자찾기아이콘 (132:5395) | 20px | `icon/BurialSearchIcon` → `HeaderMenu` |
| `usage-guide-icon.png` | 이용안내아이콘 (132:5392) | 20px | `icon/UsageGuideIcon` → `HeaderMenu` |
| `search-icon.png` | 검색아이콘 (132:5399) | 24px | `icon/SearchIcon` → `TopBanner` |
| `menu-icon.png` | 메뉴아이콘 (132:5398) | 24px | `icon/MenuIcon` → `TopBanner` |
| `more-icon.png` | 더보기아이콘 (254:7715) | 24px | `icon/MoreIcon` → `RelatedSites` |
| `instagram-icon.png` | 인스타그램아이콘 (132:5379) | 24px | `icon/InstagramIcon` → `Footer` |
| `youtube-icon.png` | 유튜브아이콘 (132:5378) | 24px | `icon/YoutubeIcon` → `Footer` |
| `facebook-icon.png` | 페이스북아이콘 (132:5383) | 24px | `icon/FacebookIcon` → `Footer` |
| `ipin-icon.png` | 아이핀아이콘 (132:5397) | 20px | `icon/IpinIcon` → 로그인 화면 |
| `image-zoom-icon.png` | 이미지확대아이콘 (흰색) | 20px | `icon/ImageZoomIcon` → 버스운행 '지도확대' |
| `clock-icon.png` | 시계아이콘 (132:5388) | 40px | `icon/ClockIcon` → `HeaderTimeGuide` |
| `memorial-message-write-icon.png` | 추모참배글남기기아이콘 (132:5387) | 20px | `icon/MemorialMessageWriteIcon` → `HeaderMenu` (데스크탑) |
| `volunteer-application-icon.png` | 봉사활동신청아이콘 (132:5384) | 20px | `icon/VolunteerApplicationIcon` → `HeaderMenu` (데스크탑) |

## images/

| 파일 | Figma 이름 | 사용하는 컴포넌트 |
|---|---|---|
| `header-image-01.jpg` | 헤더이미지 / 이미지01 | `HeaderImage` |
| `header-image-02.jpg` | 헤더이미지 / 이미지02 (이미지02와 같은 파일) | `HeaderImage`, `Notice`, `Notification` |
| `image-03.jpg` | 이미지03 | `NoticeNotification`, `Notice`, `Notification` |
| `image-04.jpg` | 이미지04 | `Notification` |
| `korean-war-remains-joint-burial.jpg` | 6.25전사자 발굴유해 합동안장식 | `CardView` |
| `chiefs-of-staff-memorial-tower-visit.jpg` | 제78주년 국군의 날 계기 육해공군참모총장 현충탑 참배 | `MediaNewsCard`, `CardView` |
| `hospital-director-memorial-tower-visit.jpg` | 국군대전병원장 ○○○ 현충탑 참배 | `Notice`, `CardView` |
| `fallen-firefighters-joint-burial.jpg` | 순직소방공무원 합동안장식 | `CardView` |
| `memorial-message-background.jpg` | 추모의 글 배경 (모바일_메인·데스크탑_메인) | `pages/Main` |
| `bus-route-map.jpg` | 보훈모시미 노선도 (intr_0608_img01_20220614) | `pages/UsageGuide` (버스운행 · 지도확대) |
| `logo-emblem.png` | 로고 엠블럼 (로고 18:7730 · 132:5380) | `Logo`, `FooterLogo` |

> 참고: `images/`의 사진은 원본 크기(1~11MB)라 화면에 쓰는 크기보다 훨씬 큽니다. 배포 전에 용량을 줄이는 작업이 필요합니다.
