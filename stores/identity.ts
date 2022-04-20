import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Lu',
    lastName: 'Sai',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Lu'
      this.lastName = 'Sai'
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
