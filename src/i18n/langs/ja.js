// *****vue-i8n*****
// const ja = {
//     message: {
//         'hello': 'こんにちは',
//     }
// }

// export default ja

// *****兼容element-ui*****
import jaLocale from 'element-ui/lib/locale/lang/ja'
const ja = {
  message: {
    hello: 'こんにちは',
    cancel: 'キャンセル',
    confirm: '確認',
    login: 'ログイン',
    click: 'クリック',
    switchCn: '中国語を切り替える',
    switchJa: '日本語を切り替える',
    switchEn: '英語を切り替える',
    msg: 'これはメッセージです。',
  },
  ...jaLocale
}

export default ja;
