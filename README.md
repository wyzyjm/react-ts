# Note
1. `npx create-react-app my-ts-app --template typescript`
2. `cd my-ts-app ` 
3. `npm start`          Starts the development server.
4. `npm install --save husky lint-staged prettier`  每次代码提交,执行 lint检查
5. `配置  package.json`
```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
},
```

## Style
1. 添加sass
    - `npm install sass`
    - 添加sass 文件 ( .scss)
    - @use 引用其它文件
    - ~ 解析node_modules文件下的东西


## 代码分析
1. `npm install --save source-map-explorer`
2. package.json, `"analyze": "source-map-explorer 'build/static/js/*.js'",`
3. `npm run build`
4. `npm run analyze`

## 组件开发
- [storybook]https://storybook.js.org/docs/react/get-started/setup

## 测试
- `npm test`           Starts the test runner.

## 部署
- `npm run build`      Bundles the app into static files for production.
