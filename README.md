# vue-scaffolding
Vue.js 기본 구성을 생성한 소스 코드입니다.
아래 사항은 공통 개발 환경을 정의 합니다.

---
## 1. 개발 환경
### 1.1. VSCode 플러그인 및 테마 설정
- 색 테마 : Night Owl
- 파일 아이콘 테마 : Material Icon Theme
- 뷰 확장 플러그인 : Vetur
- 뷰 코드 스니펫 : Vue VSCode Snippets
- 문법 검사 : ESLint, TSLint
- 실습 환경 보조 : Live Server

### 1.2. 기술 스택
* Vue.js 2.6.10
* Vue Router
* Vuex
* Axios
* Vue Test Uitls

## 2. git 커밋 메시지 템플릿 만들기

### 2.1. 커밋메시지 파일 생성 및 에디터 진입
```bash
# 파일생성
touch ~/.gitmessage.txt

# 에디터 진입
vim ~/.gitmessage.txt
```

### 2.2. 커밋 템플릿 저장

```bash
# <타입>: <제목>

##### 제목은 최대 50 글자까지만 입력 ############## -> |


# 본문은 위에 작성
######## 본문은 한 줄에 최대 72 글자까지만 입력 ########################### -> |

# 꼬릿말은 아래에 작성: ex) #이슈 번호

# --- COMMIT END ---
# <타입> 리스트
#   feat    : 기능 (새로운 기능)
#   fix     : 버그 (버그 수정)
#   refactor: 리팩토링
#   style   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs    : 문서 (문서 추가, 수정, 삭제)
#   test    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore   : 기타 변경사항 (빌드 스크립트 수정 등)
# ------------------
#     제목 첫 글자를 대문자로
#     제목은 명령문으로
#     제목 끝에 마침표(.) 금지
#     제목과 본문을 한 줄 띄워 분리하기
#     본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.
#     본문에 여러줄의 메시지를 작성할 땐 "-"로 구분
# ------------------
```

### 2.3. commit.template에 파일 설정
```bash
git config --global commit.template ~/.gitmessage.txt
```