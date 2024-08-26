//btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById ('btn');

// textというidを持つh2要素を取得し、定数に代入する
const textElement = document.getElementById ('text');

//コードの可読性向上
const updateText = () => {
  textElement.textContent='ボタンをクリックしました';
}

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click',() => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout ( 
// updateText関数として定義して、それを setTimeout に渡す場合
 updateText,2000);

});