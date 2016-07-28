/** 
 *  格式化文章發布時間
 */
exports.customTime = item => {
  let nowTime = new Date().getTime()
  let minuteTime = 60*1000
  let hourTime = 60*minuteTime
  let dayTime = 24*hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12

  let publishTime = new Date(item).getTime()
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if(historyTime >= yearTime){
    //按年算
    descTime = parseInt(historyTime/yearTime) + '年前'
  }else if(historyTime< yearTime && historyTime >= monthTime){
    //按月算
    descTime = parseInt(historyTime/monthTime) + '月前'
  }else if(historyTime< monthTime && historyTime>= dayTime){
    //按天算
    descTime = parseInt(historyTime/dayTime) + '天前'
  }else if(historyTime< dayTime && historyTime>= hourTime){
    //按小时算
    descTime = parseInt(historyTime/hourTime) + '小时前'
  }else if(historyTime< hourTime && historyTime>= minuteTime){
    //按分钟算
    descTime = parseInt(historyTime/minuteTime) + '分钟前'
  }else{
    descTime = '刚刚'
  }
  return descTime
}

exports.formatDate =  time => {
  let tmpDate = new Date(time)
  let year = tmpDate.getFullYear()
  let mathon = tmpDate.getMonth() + 1
  let day = tmpDate.getDate()
  let hours = tmpDate.getHours()
  let minutes = tmpDate.getMinutes()
  return year + '.' + mathon + '.' + day + ' ' + hours + ':' + minutes
}
const digitsRE = /(\d{3})(?=\d)/g

exports.currency= (value, currency, decimals) => {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}