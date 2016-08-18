exports.timeToNow = (time) => {
  const t = parseFloat(new Date - new Date(time)) / 1000;
  let str;
  if (t) {
    if (t > 60 && t < 3600) {
      str = `${parseInt(t / 60.0, 10)}分钟前`;
    } else if (t >= 3600 && t < 86400) {
      str = `${parseInt(t / 3600.0, 10)}小时前`;
    } else if (t >= 86400 && t < 86400 * 30) {
      str = `${parseInt(t / 86400.0, 10)}天前`;
    } else if (t >= 86400 * 30 && t < 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 30), 10)}个月前`;
    } else if (t >= 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 365), 10)}年前`;
    } else {
      str = `${parseInt(t, 10)}秒前`;
    }
  }
  return str;
};

exports.transTab = (tab) => {
  let str;
  switch (tab) {
    case 'good':
      str = '精华';
      break;
    case 'share':
      str = '分享';
      break;
    case 'job':
      str = '招聘';
      break;
    case 'ask':
      str = '问答';
      break;
    default:
  }
  return str;
};


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