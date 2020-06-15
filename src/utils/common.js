export function timestampToTime(timestamp = Date.now()) {
  let date = new Date(timestamp + 8 * 3600 * 1000);
  return date.toJSON().substring(0, 19).replace('T', ' ');
  // new Date(Date.now()+8*3600*1000).toISOString()
}

export function transformTime(timestamp = +new Date()) {
  function addZero(m) {
    return m < 10 ? '0' + m : m;
  }
  if (timestamp) {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var M = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
  } else {
    return '';
  }
}

export function indexArr(arr, id) {
  arr.findIndex((item) => item.id === id);
}