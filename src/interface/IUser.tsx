export interface IUser extends Record<string, string | number | boolean | string[]> {
  id: string
  account: string
  super_admin: boolean
  firstName: string
  lastName: string
  email: string
  description: string
  group: string[]
  createdDate: string
  updatedDate: string
}
