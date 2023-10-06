import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authMobile: types.optional(types.string, ""),
    authOtp: types.optional(types.string, "")
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationErrors() {
      return {
        
        authMobile: (function () {
          if (store.authMobile.length === 0) return "can't be blank"
          if (store.authMobile.length < 9) return "must be at least 9 number"
          if (!/[0-9]/.test(store.authMobile))
            return "must be a valid number address"
          return ""
        })(),

        authOtp: (function () {
          // console.log(store.authOtp)
          // if (store.authOtp.length === 0) return "can't be blank"
          // if (store.authOtp.length < 4) return "must be at least 4 number"
          
          return ""
        })()

        
        
      }
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthMobile(value: string) {
      store.authMobile = value
    },
    setAuthOtp(value: string) {
      store.authOtp = value
    },    
    logout() {
      store.authToken = undefined
      store.authMobile = ""
      store.authOtp = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
