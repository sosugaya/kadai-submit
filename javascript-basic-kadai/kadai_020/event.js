//画面から取得したHTML要素が定数に代入されている
//ボタンをクリックした際に正しく文字変更がされている

//ボタンをクリックする
//

//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  console.log('クリックされました！');
});
//h2要素を作成する

//作成したh2要素に「ボタンをクリックしました」というテキストを追加する