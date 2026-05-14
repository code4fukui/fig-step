# fig-step

`<fig-step>`カスタム要素を使用して、ウェブページ要素に番号付き注釈を追加する軽量なJavaScriptライブラリです。

## デモ

- [動作例](https://code4fukui.github.io/fig-step/?fig=on)

## 特徴

- **シンプルなAPI**: HTMLタグで宣言的に、またはJavaScript関数でプログラム的に注釈を追加できます。
- **URLによる表示制御**: URLパラメータ（`?fig=on`）を使用して注釈の表示/非表示を切り替えられます。
- **軽量**: 依存関係のないVanilla JavaScriptのカスタム要素です。
- **CSSでカスタマイズ可能**: 注釈のデフォルトスタイルを簡単に上書きできます。

## 使い方

### 1. スクリプトの追加

HTMLファイルにモジュールを読み込みます。

```html
<script type="module" src="https://code4fukui.github.io/fig-step/fig-step.js"></script>
```

### 2. 注釈の追加

注釈を追加する方法は2通りあります。

#### オプションA: インライン配置

HTML内の注釈を表示したい場所に、`<fig-step>`タグを直接配置します。内容は数字にします。数字とスペースの後に続くテキストは無視されます。

```html
<!-- これは番号"1"の注釈を表示します -->
<p>最初にこれを実行してください <fig-step>1 初期設定</fig-step>。</p>

<!-- これは番号"2"の注釈を表示します -->
<button>送信 <fig-step>2</fig-step></button>
```

#### オプションB: プログラムによる配置

静的メソッド`FigStep.add(selector, text)`を使用して、既存の要素に注釈を追加します。注釈はCSSセレクタに一致する要素の左上隅に配置されます。

```html
<button id="save-btn">変更を保存</button>

<script type="module">
  import { FigStep } from "https://code4fukui.github.io/fig-step/fig-step.js";

  // これはボタンに番号"3"の注釈を追加します
  FigStep.add("#save-btn", "3 保存をクリック");
</script>
```

### 3. 表示の制御

注釈はデフォルトで非表示です。表示するには、ページのURLに`?fig=on`クエリパラメータを追加します。

- **注釈を表示**: `https://example.com/page?fig=on`
- **注釈を非表示**: `https://example.com/page` または `https://example.com/page?fig=off`

## カスタマイズ

CSSを使用して注釈のデフォルトスタイルを上書きできます。注釈は`<fig-step>`カスタム要素内の`<span>`要素です。

```css
/* 例: 注釈の色を変更 */
fig-step span {
  background-color: #ffdd57;
  border-color: #ff9f1c;
  color: #272727;
}
```

## ライセンス

[MIT](LICENSE)
