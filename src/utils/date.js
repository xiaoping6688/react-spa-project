/**
 * 日期操作类
 */

/**
 * 相对日期
 * @param date 要格式化的日期，可以是时间戳、日期对象或字符串
 */
export var relativeFormat = function (date) {
  date = new Date(date)

  let seconds, minutes, hours, days
  let nowTime = new Date().getTime()
  let differ = (nowTime - date.getTime()) / 1000
  days = Math.round(differ / (24 * 60 * 60))
  hours = Math.round(differ / (60 * 60))
  minutes = Math.round(differ / 60)
  seconds = Math.round(differ)

  if (days > 0 && days < 2) {
    return days + '天前'
  } else if (days <= 0 && hours > 0) {
    return hours + '小时前'
  } else if (hours <= 0 && minutes > 0) {
    return minutes + '分钟前'
  } else if (minutes <= 0 && seconds >= 0) {
    return '刚刚'
  } else {
    return (date.getFullYear() + '-' + this.padZero(date.getMonth() + 1) + '-' + this.padZero(date.getDate()) + ' '+ this.padZero(date.getHours()) + ':'+ this.padZero(date.getMinutes()))
  }
}

let padZero = function (n) {
  if (n % 1 === 0 && n < 10) {
    return '0' + n
  } else {
    return n
  }
}

/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
export var dateFormat = function (date, format) {
  date = new Date(date)

  let map = {
    'M': date.getMonth() + 1, // 月份
    'd': date.getDate(), // 日
    'h': date.getHours(), // 小时
    'm': date.getMinutes(), // 分
    's': date.getSeconds(), // 秒
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }

  format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
    let v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v
        v = v.substr(v.length - 2);
      }
      return v
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length)
    }
    return all
  })

  return format
}

/**
 * 当天是当前月的第几周
 */
export var getMonthWeekth = function (date) {
  date = new Date(date)
  let day = date.getDate()
  let week = date.getDay()

  // 当前周的还有几天过完(不算今天)，加上当前天的和在除以7，就是当天是当前月份的第几周
  return Math.ceil((6 - week + day) / 7)
}

/**
 * 当天是本年的第几周
 */
export var getYearWeekth = function (date) {
  date = new Date(date) // 当前日期
  let date2 = new Date(date.getFullYear(), 0, 1) // 当年第一天
  let day = Math.round((date.valueOf() - date2.valueOf()) / 86400000) // 当前日期是今年第多少天

  // 用day加当前年的第一天的周差距的和在除以7就是本年第几周
  return Math.ceil((day + ((date2.getDay() + 1) - 1)) / 7)
}

/**
 * 计算相邻日期
 */
export var getDiffDate = function (date, num, changeSelf = true) {
  if (!changeSelf) {
    date = new Date(date)
  }
  date.setDate(date.getDate() + num)
  return date
}

/**
 * 根据当天日期获取本周第一天
 */
export var getWeekFirstDate = function (date) {
  date = new Date(date)
  return getDiffDate(date, -this.formatWeekOrder(date.getDay()))
}

/**
 * 格式化周日期顺序（0-6）
 */
export var formatWeekOrder = function (day) {
  return (day == 0 ? 6 : day - 1)
}
