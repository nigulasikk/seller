<template>
  <div>
    <contact-Header></contact-Header>
    <div class="news-list w-1200">
      <div class="llss">
        <dl v-for="record in reqResult.records">
          <dt>
            <router-link :to="{ name: 'articleDetail', params: { Id: record.id } }" class="bt">
             {{record.title}}
            </router-link>
            <span class="data">{{record.createTime | time-formater-no-hour}}发表</span>
            <p></p>
          </dt>
          <dd>
            <span>阅读量</span> <a> {{record.viewCount}}</a></dd>
        </dl>
      </div>
      <dl class="fanye2"></dl>
    </div>
  </div>
</template>
<script>
import ContactHeader from './cpnts/newsHeader'
import schoolAPI from '@/api/schoolAPI'
export default {
  name: 'newinfo',
  data () {
    return {
      reqResult: ''
    }
  },
  components: {
    ContactHeader,
    schoolAPI
  },
  methods: {
  },
  created () {
    schoolAPI.getArticleList({ page: 1, size: 10 }).then((res) => {
      this.reqResult = res.data.data
      console.log(res.data)
    })
  }
}
</script>
<style lang='less'>
@import '../../assets/style/school/school.less';
</style>
