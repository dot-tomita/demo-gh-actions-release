# demo auto release

## 動作

- tag を `v*.*.*` 形式で push すると workflow が実行。

- ビルド（今回はのサンプルは next の SSG）

- ビルドしたファイルを zip 圧縮。

- tag と同名で release を作成、release の assets に前述の zip を追加。

## using

https://github.com/softprops/action-gh-release
