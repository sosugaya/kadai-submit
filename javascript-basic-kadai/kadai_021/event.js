//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById ('btn');

// textというidを持つh2要素を取得し、定数に代入する
const textElement = document.getElementById ('text');

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout (() => {
  clickBtn.addEventListener('click',() => {

     //作成したh2要素に「ボタンをクリックしました」というテキストを追加する
 textElement.textContent='ボタンをクリックしました';});
 },2000);