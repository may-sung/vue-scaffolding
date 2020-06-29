module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
        'eslint:recommended',
        // "@vue/prettier",
        // 'plugin:prettier/recommended',
        // "eslint:recommended",
        // "airbnb-base",
        // "prettier"
        // "plugin:vue/base",
        // "plugin:vue/essential",
    ],
    // plugins: [
    //     'prettier',
    // ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-console': 'off',
        'indent': ['error', 4],
        'vue/html-indent': [
            'error', 4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        // 'vue/component-name-in-template-casing': 'off',
        // 'prettier/prettier': ['error', {
        //     singleQuote: true, // single 쿼테이션(따옴표) 사용 여부
        //     semi: true, // 세미콜론 사용 여부(;)
        //     useTabs: false, // 탭 사용 여부
        //     tabwidth: 4, // 탭 너비
        //     trailingComma: 'all', // 여러줄 사용할 때, 후행 콤마 사용 방식
        //     printWidth: 80, // 줄바꿈 폭 길이
        //     bracketSpacing: true, // 객체 리터럴 괄호 공백 삽입 여부
        //     arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
        //     },
        // ],
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
