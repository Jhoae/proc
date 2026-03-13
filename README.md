# proc

`proc`는 "프로젝트 추천과 기록"을 위한 웹 프로젝트입니다. 사용자가 원하는 키워드를 고르면 어울리는 프로젝트 주제를 추천하고, 그 뒤에 이어지는 브레인스토밍, 기획, 진행 기록, 회고를 구조적으로 남길 수 있는 페이지를 만드는 것이 목표입니다.

## Why this project

- 백엔드 개발자나 금융권 개발자 준비 과정에 맞는 프로젝트 주제를 추천할 수 있습니다.
- 일반 메모장이 아니라 프로젝트 진행에 필요한 기록 흐름을 기능 단위로 나눌 수 있습니다.
- 이후 로그인, 저장, 추천 로직 고도화, 협업 기능을 붙이기 쉬운 구조로 시작합니다.

## Current MVP

- 희망 직무와 프로젝트 기간을 반영한 추천 점수 계산
- 추천 결과를 기록 보드와 연결
- 브레인스토밍, 기획, 진행 기록, 회고 입력 폼
- `localStorage` 기반 자동 저장
- 이력서 문장, 면접 질문, README 체크리스트 출력

## Tech Stack

- React
- TypeScript
- Vite

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
docs/
src/
  app/
  features/
    career/
    planning/
    recommendation/
    strategy/
  styles/
```

## Next steps

- 로그인, DB, 팀 협업 기능 연동
- 프로젝트별 다중 기록 저장
- 사용자별 추천 히스토리와 포트폴리오 export
