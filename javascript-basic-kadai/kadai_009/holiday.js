

const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// インデックスを0に初期化
let index = 0; 

while (index < holidays.length) { // インデックスが配列の長さ未満である間
  console.log(holidays[index]);  // 現在のインデックスの要素を出力
  index++;  // インデックスを1増やして次の要素に移動
}


//for文を使用 （初期化、条件、反復処理）から構成
 for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
 }


