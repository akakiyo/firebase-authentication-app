# Firebase Authentication を用いた認証機能

# 実行方法

firebase でプロジェクトは作られていることを前提。
.env ファイルに Firebase プロジェクトの設定画面に書かれている apiKey、authDomation、projectId、storageBucket、messagingSnederId を入力する。

```
REACT_APP_FIREBASE_KEY="~~~~~~~~~~"
REACT_APP_FIREBASE_DOMAIN="~~~~~~~~~~"
REACT_APP_FIREBASE_PROJECT_ID="~~~~~"
REACT_APP_FIREBASE_STORAGE_BUCKET="~~~~~~~~~~~"
REACT_APP_FIREBASE_SENDER_ID="~~~~~~~~~~~"
```

```
$ yarn add firebase
$ yarn add react-router-dom
$ yarn add styled-components
$ yarn start
```

[紹介記事](https://ki-log.vercel.app/article/firebase-authentication-and-react)
