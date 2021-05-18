# demo auto release

## 動作

- ビルド（今回はのサンプルは next の SSG）

- ビルドしたファイルを zip 圧縮。

- github-tag の GitHub Action が自動で最新の release タグのバージョンを上げて tag を作成

- 上記の tag と同名で release を作成、release の assets に前述の zip を追加。

## using

https://github.com/marketplace/actions/github-tag
https://github.com/softprops/action-gh-release
