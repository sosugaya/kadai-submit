
//引数で渡した値を二乗した計算結果を戻り値として返す関数を記述

// 与えられた引数numを2乗にし、その値を戻り値として返す関数を定義する

const squareTotal =(num)=>{
  return num ** 2;
}

// 関数の戻り値を出力する
console.log(squareTotal(Math.floor(Math.random() * 10) + 1));

