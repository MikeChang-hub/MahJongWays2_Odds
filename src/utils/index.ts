import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/config/constants'
import { DictItem } from '@/types'

type Value = string | null
export const closeWebViewFun = window.parent.closeWebView
/**
 * 设置cookie
 * @param key
 * @param value
 */
export const setCookie = (key: string, value: Value): void => {
  Cookies.set(key, value)
}

/**
 * 读取cookie
 * @param key
 * @returns
 */
export const getCookie = (key: string): Value => {
  return Cookies.get(key)
}

/**
 * 设置token
 * @param value
 */
export const setToken = (value: Value): void => {
  setCookie(TOKEN_KEY, value)
}

/**
 * 读取token
 */
export const getToken = (): Value => {
  return getCookie(TOKEN_KEY)
}

/**
 * 从字典列表取字典name
 * @param list
 * @param value
 * @returns
 */
export const getDictName = (list: DictItem[], value: number | string | undefined): string => {
    const item = list.find(it => it.value === value)
    return item?.name || ''
}

/**
 * 空值判断
 * @param value
 * @returns
 */
export const isEmpty = (value: any):boolean => value === '' || value === null || value === undefined || value === 'null'

/**
* 获取 url 地址上的参数
* @params name
* @returns
* */

export function getQueryVariable(variable: String) {
    let query = window.location.href.split('?')[1];
    if (query) {
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let pair = vars[i].split("=");
            console.log(variable)
            console.log(pair[0])
            if(pair[0] == variable){return pair[1];}
        }
    }
    return '';
}

/**
 * @param {any} data 要存储的数据
 *@param {String} key 要存储数据的key
 *descrition: 存储sessionStorage的数据
 */
export function setSession(key: string, data: any) {
    if (arguments.length < 2) {
        throw new SyntaxError('must provide key && data');
    }
    if (typeof key !== 'string' || key === '') {
        throw new TypeError('setSession: key must be a valid string key');
    }
    const json = JSON.stringify(data);
    window.sessionStorage.setItem(key, json);
}

/**
 * 根据传入的key 查询sessionStorage的数据
 * @param {查询的key} key
 */
export function getSession(key: string) {
    if (typeof key !== 'string' || key === '') {
        return 'invalid key';
    }
    const data = window.sessionStorage.getItem(key);
    try {
        return JSON.parse(<string>data);
    } catch (e) {
        return data;
    }
}

/**
 *@param {String} key 删除对应的value
 *descrition: 删除sessionStorage的数据
 */
export function removeSession(key: string) {
    if (typeof key !== 'string' || key === '') {
        throw new TypeError('setSession: key must be a valid string key');
    }
    return window.sessionStorage.removeItem(key);
}
