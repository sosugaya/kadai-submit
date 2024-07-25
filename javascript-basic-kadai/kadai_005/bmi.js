 // 変数の宣言
 let userWeight;
 let userHeight;

 // 値の代入
 userWeight = 68;
 userHeight = 1.7;

 // コンソールへの出力
 console.log('体重:'+(userWeight)+'kg');
 console.log('身長:'+(userHeight)+'m');

 // 四則演算
 console.log('BMI:'+ (userWeight/(userHeight*userWeight)).toFixed(2)+'kg/m²');

