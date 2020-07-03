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

## 3. 라우터 설정(& 코드 스플리팅)

> history 모드로 프로덕션 레벨에서 배포시 Server Configuration을 설정해야 한다.   
정적인 웹 자원을 서버에 배포할 때 그 서버에서 URL에 대한 우회, 필터링 기능 등을 넣어 주어야 한다.  
아래 공식문서를 보면 각 서버 종류별로 설정하는 방법이 나와 있다.  
https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode

```bash
# 라우터 모듈 설치
npm i vue-router
```

```js
// src/routes/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
});

// src/main.js
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/index'; //라우터 코드 추가

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router, //라우터 코드 추가
}).$mount('#app');
```

```html
<!-- src/views/LoginPage.vue -->
<template>
    <div>login</div>
</template>

<script>
export default {

};
</script>

<style>

</style>

<!-- src/App.vue -->
<template>
    <div>
        <header>
            <router-link to="/login">
                로그인
            </router-link> |
            <router-link to="/signup">
                회원가입
            </router-link>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
```