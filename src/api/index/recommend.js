import http from '../public'
// 轮播图
export const getMainPush = (params) => {
  return http.doGet('/main_push', params)
}
// 获取用户信息
export const getCourier = (params) => {
  return http.doGet('/courier', params)
}

// 分类设置
export const getClassify = (params) => {
  return http.doGet('/classify', params)
}

// 图文素材
export const getImgText = (params) => {
  return http.doGet('/img_text', params)
}

// 搜索图文
export const searchGetImgText = (params) => {
  return http.doGet('/img_text/search', params)
}

// 图文素材详情
export const getImgTextDetail = (params) => {
  return http.doGet('/img_text/' + params.id, '')
}

// 图文素材阅读数
export const getReadNumber = (params) => {
  return http.doGet('/img_text/read/number', '')
}

// 获取当前用户的阅读数
export const getReadNumberUser = (params) => {
  return http.doGet('/img_text/read/number/user', params)
}

// 图文素材阅读接口
export const getAddnumber = (params) => {
  return http.doPost('/img_text/read', params)
}

// 图文素材点赞数
export const getPraise = (params) => {
  return http.doGet('/img_text/praise/number', params)
}

// 获取当前用户对素材的点赞数
export const getPraiseUser = (params) => {
  return http.doGet('/img_text/praise/number/user', params)
}

// 图文素材点赞
export const getAddpraise = (params) => {
  return http.doPost('/img_text/praise', params)
}

// 图文素材评论数
export const getCommentNumber = (params) => {
  return http.doGet('/img_text/comment/number', params)
}

// 获取转发链接
export const getWxUrl = (params) => {
  return http.doGet('/forward/url?params=materialId=' + params.materialId + ',' + 'courierId=' + parseInt(params.courierId) + ',' + 'levels=' + params.levels, '')
}
// 快递员转发
export const getWxCourier = (params) => {
  return http.doPost('/forward/courier?shopGuideToken=' + sessionStorage.getItem('accessToken'), params)
}

// 粉丝转发
export const getWxVip = (params) => {
  return http.doPost('/forward/vip', params)
}

// 获取评论列表
export const getImgTextComment = (params) => {
  return http.doGet('/img_text/comment', params)
}

// 图文评论
export const getPostComment = (params) => {
  return http.doPost('/img_text/comment', params)
}

// 通过id获取快递员信息
export const getUserCourier = (params) => {
  return http.doGet('/courier/' + params.id, '')
}
