# frontend-v2

Vue CLI의 기본 개발 환경을 구성한 소스 코드입니다.

---

## 1. 프로젝트 생성

```bash
# Node.js & NPM 설치확인(https://nodejs.org/en/download/)
$ node -v
$ npm -v

# Vue 최초설치 & update
$ npm install -g @vue/cli # sudo npm install -g @vue/cli
$ vue --version

# 프로젝트 생성
$ vue create 프로젝트명

# 생성 옵션
# ? Manually select features
# ? Babel, Linter / Formatter, Unit Testing
# ? ESLint + Airbnb
# ? Lint on save
# ? Jest
# ? In dedicated config files
# ? n

# 로컬 서버 실행
$ cd 프로젝트명
$ npm run serve
```

## 2. 프로젝트 개발 환경 세팅

### 2.1. VSCode에서 파일을 절대 경로로 찾기 설정

```json
// jsconfig.json
{
    "compilerOptions": {
        "baseUrl": ".",
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

### 2.2. ESLint 에러가 화면엔 표시되지 않게 하는 방법

```js
// vue.config.js
module.exports = {
    devServer: {
        overlay: false,
    },
};
```

### 2.3. ESLint 규칙 적용

```js
// eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "linebreak-style": 0,
    "no-console": "off",
    "indent": ["error", 4],
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
```