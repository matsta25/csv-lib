import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  sendFile () {
    return Api().post('file')
  }
}
