///変数(num)が3の倍数の場合： “3の倍数です”

let num  = Math.floor(Math.random() * 50) + 1;

console.log(`ランダムに選ばれた数: ${num}`);


if (num % 3 === 0) {
  console.log('3の倍数です');
}

///変数(num)が5の倍数の場合： “5の倍数です”


else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//変数(num)が3と5の倍数の場合： “3と5の倍数です”

else if (num % 3 === 0 && nam % 5 === 0) {
  console.log ('3と5の倍数です')
}

//それ以外の場合： 変数(num)を出力する

else {
  console.log (num);
}








