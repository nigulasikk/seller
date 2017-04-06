import axios from 'axios'

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
        } else if (response.data.code === 0) {
          // console.log(response)
          resolve(response)
        } else {
          console.log('未知状态码：' + response.data.code)
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
      axios.post(url, {
        params: data,
        withCredentials: true
      })
      .then(function (response) {
        if (response.data.code === 1010) {
          console.log('没有权限')
        } else if (response.data.code === 0) {
          // console.log(response)
          resolve(response)
        } else {
          console.log('未知状态码：' + response.data.code)
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
