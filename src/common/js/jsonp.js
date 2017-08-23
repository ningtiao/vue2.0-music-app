import originJsonp from 'jsonp'

export default function jsonp(url, data, option) { // option 回调函数
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // 如果小于0 就是？否则就是&

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => { // option 回调函数两个参数
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// url的封装
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value) // encodeURIComponent把字符串作为URI 组件进行编码
  }
  return url ? url.substring(1) : ''
}