# HyeongMin Park — Portfolio

박형민 / HyeongMin Park의 개인 포트폴리오 이력서. Forward Deployed Engineer 포지션.

한국어/영어 토글, 라이트/다크 테마, PDF 저장(브라우저 인쇄)을 지원하는 단일 페이지입니다.

## Stack

- Next.js 15 (App Router) / React 19 / TypeScript
- Pretendard (본문) + IBM Plex Mono (라벨/데이터)
- 배포: Vercel

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 검증
```

## 콘텐츠 수정

모든 이력서 내용은 `lib/content.ts` 한 곳에 있습니다(한국어 + 영어). 이 파일만 고치면 됩니다.

## 연락처(전화번호) — 저장소에는 없음

전화번호는 저장소에 커밋하지 않습니다. 배포 환경변수로만 노출됩니다.

- Vercel Project Settings > Environment Variables 에 `NEXT_PUBLIC_PHONE` 추가
- 값이 있으면 히어로/PDF에 전화가 표시되고, 없으면 자동으로 숨겨집니다.

## Deploy (Vercel)

1. 이 저장소를 GitHub에 push
2. Vercel에서 New Project > 이 repo 선택 (프레임워크 자동 감지: Next.js)
3. (선택) `NEXT_PUBLIC_PHONE` 환경변수 설정
4. Deploy
