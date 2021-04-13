import { DocumentType } from '@typegoose/typegoose'
import { User } from '@/models/User'

declare module 'telegraf' {
  export class Context {
    dbuser: DocumentType<User>
  }
}