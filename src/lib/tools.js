export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

export const formatTen = (num) => {
  return num > 9 ? (num + '') : ('0' + num)
}

export const formatDate = (date) => {
  if (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    // return year + '-' + formatTen(month) + '-' + formatTen(day)
    return  year + formatTen(month) + formatTen(day)
  }
}

