//画面から取得したHTML要素が定数に代入されている
//ボタンをクリックした際に正しく文字変更がされている


//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// textというidを持つh2要素を取得し、定数に代入する
const textElement = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  
  //作成したh2要素に「ボタンをクリックしました」というテキストを追加する
 textElement.textContent='ボタンをクリックしました';

});

