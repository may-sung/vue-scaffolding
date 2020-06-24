# vue-scaffolding
Vue.js 기본 구성을 생성한 소스 코드입니다.

---
## 1. 개발 환경
### 1.1. VSCode 플러그인 및 테마 설정
> vscode → Extensions<br />
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

---

## 2. 프로젝트 생성 및 환경 구성
### 2.1. Node.js & NPM 설치하기
[Node.js Download] https://nodejs.org/en/download/

```bash
# 설치확인
node -v
npm -v
```

### 2.2. Vue CLI 설치하기 
#### 2.2.1. Vue Installation (Vue 최초 설치 및 업데이트)

```bash
npm install -g @vue/cli
vue --version
```

#### 2.2.2. Vue Create (Vue 프로젝트 생성)

```bash
vue create 프로젝트명
```

* ? Please pick a preset:    
    => Manually select features
* ? Check the features needed for your project:    
    => Babel, Linter / Formatter, Unit Testing
* ? Pick a linter / formatter config:   
    => ESLint + Prettier
* ? Pick additional lint features:    
    => Lint on save
* ? Pick a unit testing solution:   
    => Jest
* ? Where do you prefer placing config for Babel, ESLint, etc.?   
    => In dedicated config files
* ? Save this as a preset for future projects?    
    => n

#### 2.2.3. 로컬 서버 실행

```bash
cd 프로젝트명
npm run serve
```

### 2.3. ESLint & Prettier 설정
#### 2.3.1. ESLint 에러가 화면에 표시되지 않게 하는 방법 

```javascript
// /vue.config.js 파일 생성
module.exports = {
    devServer: {
        overlay: false
    }
};
```

#### 2.3.2. ESLint에 Prettier 규칙 적용

```javascript
// /.eslintrc.js
// rules에 규칙 추가
module.exports = {
    rules: {
        "no-console": "off",
        "prettier/prettier": ['error', {
            singleQuote: true,
            semi: true,
            useTabs: true,
            tabwidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            bracketSpacing: true,
            arrowParens: 'avoid'
        }]
    }
}
```

#### 2.3.3. ESLint 플러그인 설치 및 설정 변경

> vscode → Extensions : <span style="color: green">eslint</span> 검색 

> vscode 설정 단축키 : Ctrl + , 또는 Cmd + ,

```javascript
// Eslint: Validate
// settings.json에서 편집
"eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    },
]
```

#### 2.3.4. Prettier 플러그인 해제 및 주의사항

> vscode → Extensions : <span style="color: green">prettier</span> 검색<br />
🚫 사용 안함 체크

> vscode 설정 단축키 : Ctrl + , 또는 Cmd + ,<br />
> <span style="color: green">format on save</span> 검색 

> Editor: Format On Save<br />
🚫 체크 해제 : 파일 저장 시 서식을 지정합니다.

### 2.4. 파일을 절대 경로로 찾기 설정

```javascript
// /jsconfig.json 파일 생성
// 현재 프로젝트 기준으로 workspace를 새로 생성하여 진행할 것
{
    "compilerOptions": {
        "baseUrl": ".", // 현재 프로젝트 기준
        "paths": {
            "~/*": [
                "./*"
            ],
            "@/*": [
                "./src/*"
            ],
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

### 2.5. 코딩 컨벤션 및 Vue 스타일 가이드 참고
[Vue.js Style Guide] https://kr.vuejs.org/v2/style-guide/index.html

---

## 3. 백엔드(Back-end) 구성

### 3.1. NVM(Node Version Manager) 설치 및 버전 변경

[NVM] https://github.com/nvm-sh/nvm#installing-and-updating

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

```bash
# ~/.bashrc 파일에 붙여넣기
vi ~/.baxhrc

# 아래 소스 코드를 .bashrc 파일에 붙여넣기
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```bash
node -v # 현재 버전 확인
nvm install 12.14.0 # 다른 버전 설치
node -v # 변경된 버전 확인
nvm install 10.16.3 # 다른 버전 설치
node -v # 변경된 버전 확인
```

### 3.2. API 서버 프로젝트 구성

#### 3.2.1. 서버 프로젝트 생성
❗️서버 프로젝트 구성 후, node version이 v10.16.3 이상임을 확인

```bash
git clone https://github.com/joshua1988/vue-til-server.git
cd vue-til-serve # 해당 폴더로 이동
node -v # 10.16.3 (1.2.2. NVM 설치 참고)
npm install # 모듈 설치
npm run dev # API 서버 실행
```
> 브라우저 <span style="color: green">localhost:3000</span> 검색

> 브라우저 <span style="color: green">localhost:3000/api/docs</span> 검색

#### 3.2.2. DB 구성

##### 3.2.1. MongoDB Cloud 회원 가입
[mongoDB] https://www.mongodb.com/cloud   
Sign In → Register : 회원 가입 후, 로그인하기

##### 3.2.2. MongoDB 인스턴스 생성
* Build a Cluster 버튼 클릭
* Starter Clusters FREE 선택 생성
* 기본 세팅을 두고 맨 아래 FREE 임을 확인 후 Create Cluster 버튼 생성 (약 5분 뒤 확인)
* 좌측 메뉴 SECURITY → Network Access →  
IP Whitelist 클릭 → ALLOW ACCESS FROM ANYWHERE 클릭 → Confirm 버튼 클릭
* 좌측 메뉴 SECURITY → Database Access → MongoDB Users → ADD NEW USER 버튼 클릭 → User Name: test / Password: **** 등록 후, Add User 버튼 클릭
* 좌측 메뉴 ATLAS → Clusters → CONNECT → Connect Your Application → Connection String Only 복사

#### 3.2.3. DB 연결

```javascript
// src/app.js line 20
// 위 MongoDB에서 복사된 코드를 넣는다
// 복사된 코드값중 password는 위에서 입력된 값으로 변경하기
mongoose.connect('mongodb://복사된 String 코드', {
    useNewUrlParser: true,
});
```
```bash
npm run dev # 서버 실행
```

[로컬 호스트 접속] https://localhost:3000/api/docs   
/signup 클릭 → Try it out 버튼 클릭 → 사용자 아이디, 비밀번호, 닉네임 입력 → Execute 버튼 클릭 → 하단에 Code 200 또는 VSCode에서 log 확인하여 DB연결이 정상적으로 되었는지 확인

---