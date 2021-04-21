import 'module-alias/register'
import 'dotenv/config'
import '@/models'
import bot from './helpers/bot'
import commandGreeting from './commands/greeting'
import giftPointHandler from './middlewares/giftPointHandler'

// Commands
commandGreeting(bot)

// Middlewares
bot.use(giftPointHandler)

bot.launch()