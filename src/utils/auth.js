import Cookies from 'js-cookie'

const TokenKey = ''

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set('xmuuid=XMGUEST-B6DB9660-8BF6-11E8-A4B5-F3579CA9AE27; lastsource=www.baidu.com; mstuid=1532075238754_5874; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1532075238,1532075306,1532075473,1532077456; pageid=aa6b36fbc8a2bd55; mstz=||2101296091.42|||; xm_vistor=1532075238754_5874_1532077456935-1532080813539; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1532081182')
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUrlKey(name) {
  console.log(name)
  return decodeURIComponent((new RegExp('[?|&|,]' + name + '=' + '([^&;]+?)(&|,|#|;|$)').exec(location.href) || ['', ''])[1].replace(/\+/g, '%20')) || null
}
