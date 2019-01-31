/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1;
/**
 * 线上环境
 */
export const ONLINE_HOST: string = 'https://xxx.com';

/**
 * 测试环境
 */
export const QA_HOST: string = 'http://xxx.com';

/**
 * 线上mock
 */
export const MOCK_HOST: string = 'http://xxx.com';

/**
 * 是否mock
 */
export const IS_MOCK: boolean = true;

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAIN_HOST: string = ONLINE_HOST;

/**
 * 请求的公共参数
 */
export const commonPrams: any = {};
