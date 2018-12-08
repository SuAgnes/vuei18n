// *****vue-i8n*****
// const en = {
//     message: {
//         'hello': 'hello',
//     }
// }

// export default en

// *****兼容element-ui*****
import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  message: {
    hello: 'hello',
    cancel: 'Cancel',
    confirm: 'OK',
    login: 'Login',
    click: 'Click',
    switchCn: 'Switch Chinese',
    switchJa: 'Switch Japanese',
    switchEn: 'Switch English',
    msg: 'This is a message.',
  },
  ...enLocale
}

export default en;
