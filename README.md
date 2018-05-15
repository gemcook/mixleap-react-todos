# [mixleap-react-todos](https://todos.mixleap.gemcook.com)

---

## Overview

**Osaka Mix Leap Study #13 - React 勉強会 ② ハンズオン編** で作成する Todo のリポジトリです。

* https://yahoo-osaka.connpass.com/event/85894/

## Demo

* https://todos.mixleap.gemcook.com

## Copy

### 1. 環境構築の確認する

```
node -v
```

### 2. React の開発環境を作る

```
npm install -g create-react-app
```

* [create-react-app](https://github.com/facebook/create-react-app)

### 3. create-react-app でプロジェクトを作成する

```
create-react-app mixleap-react-todos
```

### 4. ローカルでサーバーを起動する

```
cd mixleap-react-todos
npm start
```

### 5. 必要な npm ライブラリをインストールする

```
npm install -S semantic-ui-react store classnames
```

* [semantic-ui-react](https://react.semantic-ui.com/usage)
* [store.js](https://github.com/marcuswestin/store.js)
* [classnames](https://github.com/JedWatson/classnames)

### 6. SemanticCSS の CDN を読み込む

```
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
```

* [semantic-ui-react](https://react.semantic-ui.com/usage)

### 7. Todo 用の style をコピペする

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

### 7. Todo 用の style をコピペする

```jsx
<div className="b__title">
  <h1>Mix Leap React Todos</h1>
</div>
```

## Slide

* xxxxx

## License

mixleap-react-todos is released under the MIT license.
