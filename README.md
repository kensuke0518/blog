# blog
blogみたいなもの

# CSSについて
https://zenn.dev/matamatanot/articles/e0e6371fe28b7479fb3f  
https://nextjs.org/docs/basic-features/built-in-css-support  
- GlobalなCSSについては"pages/_app.js"からimportする
- Component-LevelのCSSについてはCSS Modulesがサポートされていて、CSSファイル名を"[name].module.css"として、読み込む 

## 思ったこと
React.jsは個人開発には向いている。  
大人数では現在も更新が頻繁に行われて、今日使えていた機能が明日使えないような、推奨がすぐ非推奨になるような技術は使いにくい。  
会社としての規模で動くならVanilla JS、個人での開発目的ならReact.jsを活用するのは1人なら柔軟に対応できるし将来的なことを見越して活用していくのはありだろうと考える。  
突き詰めるべきは昔から活用されているJSやPHP、SQLのような技術というのは個人的な考えだが間違っていないように思う。  


## データを扱う方法について考えてみる
https://ics.media/entry/190410/
jsonファイルやmdファイルからデータをfetchで取得できないか考えてみる。
もしできるならそれで