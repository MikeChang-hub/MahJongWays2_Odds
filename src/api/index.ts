import http from '@/request'
import {UserInfo, PasswordReset} from '@/types'

// 修改用户信息
export const updateUserInfo = (data: Partial<UserInfo>) =>
  http.put({
    url: `/client/user`,
    data: data,
  })

// 修改密码
export const resetPassword = (data: PasswordReset) =>
  http.put({
    url: `/client/user/reset`,
    data: data,
  })

// 退出登录
export const logout = () =>
  http.post({
    url: `/client/user/logout`
  })

// 商品分类
export const getGoodsCategory = (data?: any) =>
  http.get({
    url: `/client/goods/category`,
    params: data
  })

/*
*  积分商城
* */

// 获取商品列表
export const getRecommendList = (data?: any) =>
    http.get({
        url: `/front/integral/product/list`,
        params: data
    })

// 查询商品分类
export const getProductCategory = () =>
    http.get({
        url: `/front/integral/product/category/list`
    })

// 查询购物车数量
export const getProductCartNum = () =>
    http.get({
        url: `/front/integral/cart/num`
    })

// 加入购物车
export const addCartSave = (data?: any) =>
    http.post({
        url: `/front/integral/cart/save`,
        data
    })

// 查詢購物車列表
export const getIntegralCartList = () =>
    http.get({
        url: `/front/integral/cart/list`
    })

// 查詢購物車列表
export const delIntegralCartList = (data?: any) =>
    http.get({
        url: `/front/integral/cart/delete`,
        params: data
    })

// 下單
export const orderAuditSave = (data?: any) =>
    http.post({
        url: `/front/integral/order/audit/save`,
        data
    })

// 地區列表
export const getCityList = () =>
    http.get({
        url: `/front/city/id`,
        params: {cityId: 752150}
    })

// 訂單列表
export const getOrderAuditList = (data?: any) =>
    http.get({
        url: `/front/integral/order/audit/get`,
        params: data
    })

// 校验 token
export const getTokenVerify = (data?: any) =>
    http.get({
        url: `/front/gift/tokenVerify`,
        params: data
    })

// 登出
export const getLogout = () =>
    http.get({
        url: `/front/logout`
    })

export const getUserInfo = () =>
    http.get({
        url: `/front/user/info`
    })

export const getHistoryAddress = () =>
    http.get({
        url: `/front/integral/order/audit/history/address`
    })

// 取消申請
export const cancelOrder = (data) =>
    http.get({
        url: `/front/integral/order/audit/cancel/order`,
        params: data
    })

// 联系专员
export const getCommissioner = () =>
    http.get({
        url: `/front/system/setting/commissioner/list`
    })

// 限时活动是否开启
export const systemSettingActivity = () =>
    http.get({
        url: `/front/system/setting/activity`
    })

// 获取联系专员
export const systemSettingStaff = () =>
    http.get({
        url: `/front/system/setting/staff`
    })
