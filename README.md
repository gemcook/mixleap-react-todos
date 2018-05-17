# [mixleap-react-todos](https://todos.mixleap.gemcook.com)

---

## Overview

**Osaka Mix Leap Study #13 - React 勉強会 ② ハンズオン編** で作成する Todo のリポジトリです。

* https://yahoo-osaka.connpass.com/event/85894/

## Demo

* https://todos.mixleap.gemcook.com

## npm library

* [react](https://reactjs.org/)
* [semantic-ui-react](https://react.semantic-ui.com/usage)
* [store.js](https://github.com/marcuswestin/store.js)
* [classnames](https://github.com/JedWatson/classnames)

## Agenda

### 1. 環境構築の確認する

```
node -v
```

### 2. React の開発環境を作る

```
npm install -g yarn create-react-app
```

* [create-react-app](https://github.com/facebook/create-react-app)

### 3. create-react-app でプロジェクトを作成する

```
create-react-app mixleap-react-todos
```

### 4. 必要な npm ライブラリをインストールする

```
cd mixleap-react-todos
```

```
yarn add semantic-ui-react store classnames
```

* [semantic-ui-react](https://react.semantic-ui.com/usage)
* [store.js](https://github.com/marcuswestin/store.js)
* [classnames](https://github.com/JedWatson/classnames)

### 5. ローカルでサーバーを起動する

```
yarn start
```

### 6. テキストエディタでプロジェクトを開く

#### VSCode

1.  サイドバーのプラグインマークを押下する
2.  「prettier」をプラグインを検索する
3.  「Prettier - Code formatter」をインストールする
4.  VSCode の設定ページを開く (cmd + , )
5.  GitHub 記載の設置ファイルをコピーして、貼り付ける
6.  VSCode を再起動する

##### コピペする設定ファイル

```
{
   "editor.formatOnSave": true,
   "prettier.singleQuote": true,
   "prettier.bracketSpacing": false,
   "prettier.trailingComma": "es5",
}
```

#### Atom

1.  Atom の設定ページを開く (cmd + , )
2.  「Install」で「prettier-atom」と検索
3.  インストールする
4.  「Packages」で「prettier-atom」と検索
5.  「Settings」を押す
6.  GitHub 記載の設定に合わせる
7.  Atom を再起動する

##### チェックを入れる項目

* Format on Save

  * Format Files on Save
  * Ignore Files in `.eslintignore`
  * Show in Status Bar

* Prettier Options
  * Single Quotes
  * Semicolons
  * Trailing Comma
    * es5

### 7. CSS 周りをコピペする

#### Semantic の CDN を読み込む

* /public/index.html

```
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
```

#### Todo 用の CSS をコピペする

* /src/App.css

```scss
.a__todos {
  padding: 10px 20px;
  color: #555;
}

/************* b__title *************/
.b__title {
  padding: 20px 0 30px 0;
}

/************* b__add-inpu *************/
.b__add-input input {
  width: 300px;
}

.b__add-input .delete-all {
  margin-left: 20px;
}

/************* main *************/
.b__lists {
  padding: 20px 0;
  font-size: 18px;
}

.b__lists .text {
  margin-left: 20px;
}

.b__lists ul {
  list-style: none;
}

.b__lists ul li {
  padding-bottom: 15px;
}

.b__lists .w__text {
  cursor: pointer;
}

.b__lists .w__text .text.done {
  color: #ddd;
  text-decoration: line-through;
}

.b__lists .w__text .text.done {
  color: #ddd;
  text-decoration: line-through;
}

.b__lists .remove {
  margin-left: 20px;
  color: #cb0f13;
  cursor: pointer;
}

.b__lists .remove:hover {
  opacity: 0.6;
}

.b__lists .no-message {
  padding: 20px 40px;
}

/************* semantic-override *************/
.ui.checkbox {
  top: 2px;
}

.green {
  background-color: #00797e !important;
}

.green:hover {
  opacity: 0.8;
}

.pink {
  background-color: #ff5d62 !important;
}

.pink:hover {
  opacity: 0.8;
}

.red {
  background-color: #cb0f13 !important;
}

.red:hover {
  opacity: 0.8;
}
```

## Gemcook OSS Library

* https://qiita.com/gcnishino/items/0ce2d9bda9ee3b05845e

## License

mixleap-react-todos is released under the MIT license.
