export interface User {
  name: string
  surname: string
  phone: string
  email: string
  isFamiliar: boolean
  role?: 'student' | 'worker' | 'other'
  position?: string
  company?: string
  stack?: string
  sphere?: string
  university?: string
  specialization?: string
  isFree?: boolean
  place?: string
  registration?: boolean
  activity?: string
}
