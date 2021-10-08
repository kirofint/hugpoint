import { Context } from 'telegraf'

const TRIGGER_LIST =
[
  '❤️', '🤎', '🤍', '🖤', '💜', '💙',
]

export default (ctx: Context, next: () => void) => {

  return next()
}