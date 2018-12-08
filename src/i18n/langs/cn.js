// *****vue-i8n*****
// const cn = {
//     message: {
//         'hello': '你好',
//     }
// }

// export default cn 

// *****兼容element-ui*****
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  message: {
    hello: '你好',
    cancel: '取消',
    confirm: '确定',
    login: '登录',
    click: '点击',
    switchCn: '切换中文',
    switchJa: '切换日语',
    switchEn: '切换英文',
    msg: '这是一条信息。',
  },
  ...zhLocale
}

export default cn;
