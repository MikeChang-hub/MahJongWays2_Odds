import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'
import { getToken, setToken, removeSession } from '@/utils'
import { TIMEOUT, BASE_URL, TOKEN_HEADER } from '@/config/constants'
import { Toast, Dialog, Notify } from 'vant'
import router from '@/router'
import { HttpStatusEnum } from '@/config/httpStatusEnum'

class Request {
    // axios实例
    instance: AxiosInstance
    // 拦截器对象
    interceptorsObj?: RequestInterceptors
    // loading标识
    noLoading?: boolean

    constructor(config: RequestConfig) {
        this.instance = axios.create(config)
        this.interceptorsObj = config.interceptors

        // 全局请求拦截器
        this.instance.interceptors.request.use(
            (config: RequestConfig) => {
                this.shwoLoading(config)
                const token = getToken()
                if (token) {
                    // @ts-ignore
                    config.headers['Authori-zation'] = token
                }
                return config
            },
            (err: any) => err,
        )

        // 实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors,
            this.interceptorsObj?.requestInterceptorsCatch,
        )
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch,
        )

        // 全局响应拦截器
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                this.clearLoading()
                const { data } = res
                if (data && data.code !== 200) {
                    console.log(data.code);
                    if (data.code === 401) {
                        setToken('')
                        removeSession('userInfo')
                        // router.replace('/login')
                    }
                    // Notify({ type: 'danger', message: data.message || '請求異常！' });
                    // 只要不等于 200 都是返回error
                    return Promise.reject(data)
                }
                return data
            },
            (err: any) => {
                this.clearLoading()
                const { response } = err
                let error = {
                    code: -1,
                    msg: '請求異常',
                    data: {}
                }

                if (err.code === 'ECONNABORTED') {
                    error.msg = '網絡繁忙, 請稍後再試!'
                }
                if (response && response.status && response.status === 404) {
                    error.msg = '路徑地址不正確!'
                }
                if (response && response.status && response.status === 400) {
                    let strMsg = []
                    let errData = response.data && response.data.data
                    if (errData && errData) {
                        for (let errKey in errData) {
                            strMsg.push(errData[errKey])
                        }
                    }
                    error.msg = strMsg.join('；') || '請求參數不合法!'
                }

                Toast(error.msg)
                return Promise.reject(error)
            }
        )
    }

    shwoLoading(config: RequestConfig) {
        this.noLoading = config.options?.noLoading
        !this.noLoading && Toast.loading({ forbidClick: true })
    }

    clearLoading() {
        !this.noLoading && Toast.clear()
    }

    request<T>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            // 单个请求的拦截器
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config)
            }
            this.instance
                .request<any, T>(config)
                .then(res => {
                    // 单个请求拦截
                    resolve(res)
                })
                .catch((err: any) => {
                    reject(err)
                })
        })
    }

    get<T = any>(config: RequestConfig): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'GET'
        })
    }

    post<T = any>(config: RequestConfig): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'POST'
        })
    }

    put<T = any>(config: RequestConfig): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'PUT'
        })
    }

    delete<T = any>(config: RequestConfig): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'DELETE'
        })
    }
}

const origin = location.protocol + '//' + location.host;
// @ts-ignore
const BASE_API_ACTIVE = String.prototype.replace.call('#/api', /#/, origin);
console.log(BASE_API_ACTIVE);
const http = new Request({
    // baseURL: BASE_URL,
    baseURL: BASE_API_ACTIVE,
    timeout: TIMEOUT,
})

export default http
