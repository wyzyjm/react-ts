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


## 测试
- `npm test`           Starts the test runner.

## 部署
- `npm run build`      Bundles the app into static files for production.
