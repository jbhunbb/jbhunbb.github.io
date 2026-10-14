# jbhunbb.github.io

지병훈(DevOps · Platform Engineer) 포트폴리오. 빌드 도구 없이 정적 파일만으로 GitHub Pages에 배포됩니다.

## 구조

| 경로 | 내용 |
|---|---|
| `index.html` | 본문 마크업. 테마 깜빡임을 막는 짧은 스크립트와 SVG 아이콘 스프라이트만 인라인으로 둡니다 |
| `assets/css/style.css` | 모든 스타일. 다크 기본, 라이트는 `prefers-color-scheme`과 `data-theme`로 전환 |
| `assets/js/main.js` | 테마 토글, 현재 섹션 표시, 등장 효과, 프로젝트 회사별 필터, 인쇄 시 모든 행 펼치기 |
| `assets/img/og.png` | 링크 미리보기 이미지 (1200×630) |
| `404.html` | GitHub Pages가 자동으로 쓰는 404 페이지 |
| `robots.txt`, `sitemap.xml` | 검색 엔진용 |
| `.nojekyll` | Jekyll 처리 비활성화 |

## 수정과 확인

1. 파일을 고친 뒤 로컬에서 확인: `python3 -m http.server 8000` → http://localhost:8000
2. 확인 항목: 다크/라이트 전환과 새로고침 후 유지, 스크롤 시 상단 메뉴 활성 표시, 프로젝트 필터, 인쇄 미리보기(⌘P), 폭 380 / 600 / 900 / 1280
3. `main` 브랜치에 push하면 GitHub Pages가 바로 배포합니다.

경력·프로젝트 문구의 원본은 비공개 저장소(`job-applications/06-builder/core.py`)이며, 이 페이지는 그 내용을 옮긴 것입니다.
