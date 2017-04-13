import router from '../router'
import axios from 'axios'
var qs = require('qs')

const Utils = {
  get (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data,
        withCredentials: true
      })
      .then(function (response) {
        if (response.data.code === 1010) {
          console.log('没有权限')
          console.log(this)
          router.push({ path: '/login' })
        } else if (response.data.code === 0) {
          resolve(response)
        } else {
          console.log('未知状态码：' + response.data.code)
          resolve(response)
        }
      })
      .catch(function (error) {
        reject()
        console.log(error)
      })
    })
  },
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {
        withCredentials: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
      })
      .then(function (response) {
        if (response.data.code === 1010) {
          console.log('没有权限')
        } else if (response.data.code === 0) {
          // console.log(response)
          resolve(response)
        } else {
          console.log('未知状态码：' + response.data.code)
          resolve(response)
        }
      })
      .catch(function (error) {
        reject()
        console.log(error)
      })
    })
  }

}

export default Utils
