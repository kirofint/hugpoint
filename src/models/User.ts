import { prop, getModelForClass, DocumentType } from '@typegoose/typegoose'

export class User {
  @prop({ required: true, index: true, unique: true })
  id: number

  _id?: string
}

const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
})

export async function findOrCreateUser (id: number): Promise<DocumentType<User>> {
  return await UserModel.findOne({ id }) ?? await new UserModel({ id }).save()
}