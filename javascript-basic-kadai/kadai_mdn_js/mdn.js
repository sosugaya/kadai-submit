//日付の表示形式 2023年8月22日	
//const writeYearDate = () =>{
//  console.log(Date.prototype.setTime());
//}

//writeYearDate();

//

// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので1を足す
const day = today.getDate();

// 日付をフォーマットして表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);
