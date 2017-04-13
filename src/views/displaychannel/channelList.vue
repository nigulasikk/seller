<template>
  <ul>
    <li :class="channelClass(channel.channelId)" class="channel-item" :id="channel.channelId" :data-value="channel.channelId" v-for="channel in reqResult"><!-- FACEBOOK -->
      {{ channel }}
      <div class="chan-logo"></div>
      <div class="chan-info" style="display:none;">
        <div>
          <label>关联账号：</label>
          <span class="account"></span>
        </div>
        <div>
          <label>公共主页：</label>
          <div class="sel-out fn-hide level" name="homepageList" id="facebookselect">
            <div class="sel-box">
              <div class="curr" data-val="-1">请选择</div>
              <div class="opt">
              </div>
            </div>
          </div>
          <span class="home-name"></span>
          <a href="javascript:;" class="update-homepage">修改</a>

          <!-- <span></span><a href="javascript:;" class="updateHomepage">修改</a> -->
        </div>
      </div>
      <div class="chan-info">
        <p v-if="channel.channelId == 'FACEBOOK'">在全球最大的社交网络进行外贸营销，收获社交询盘。</p>
        <p v-else-if="channel.channelId == 'PINTEREST'">用高质量图片吸引潜在买家,图片营销的最佳去处。。</p>
      </div>
      <div class="chan-right">
        <span v-if="channel.channelId == 'FACEBOOK' && channel.bindingTag == 1 ">
        <a class="chan-share" href="../../view/market/add.html?idx=1">
          <div><img src=""></div>
          分享新鲜事
        </a>
        <a class="chan-share" href="../../view/market/add.html?idx=2">
          <div><img src=""></div>
          发布公共主页
        </a>
        </span>
        <span v-if="channel.channelId == 'LINKEDIN' && channel.bindingTag == 1 ">
        <a class="chan-share" href="../../view/market/add.html?idx=1">
          <div><img src=""></div>
          发布主页动态
        </a>
        <a class="chan-share" href="../../view/market/add.html?idx=2">
          <div><img src=""></div>
          分享企业快讯
        </a>
        </span>
        <hr size="1" class="line-operate">
        <button type="button" class="btn btn-white" v-if=" channel.bindingTag == 1 " @click="unBundled">解除关联</button>
        <button type="button" class="btn btn-yell" v-if=" channel.bindingTag == 0">
          <i class="icon-x"></i>关联{{ channelType }}</button>
      </div>
    </li>
  </ul>
</template>
<script>
  import channelAPI from '@/api/channelAPI'
  export default {
    name: 'channelList',
    data () {
      return {
        reqResult: '',
        channelType: ''
      }
    },
    components: {
      channelAPI
    },
    methods: {
      channelClass (Id) {
        if (Id === 'FACEBOOK') {
          this.channelType = 'Fackbook'
          return 'channel-facebook'
        } else if (Id === 'TWITTER') {
          this.channelType = 'Twitter'
          return 'channel-twitter'
        } else if (Id === 'PINTEREST') {
          this.channelType = 'Pinterest'
          return 'channel-pinterest'
        } else if (Id === 'LINKEDIN') {
          this.channelType = 'Linkedin'
          return 'channel-linkedin'
        } else if (Id === 'MAIL') {
          this.channelType = 'Mail'
          return 'channel-email'
        }
      },
      unBundled () {
      }
    },
    created () {
      channelAPI.getAllChannel().then(res => {
        this.reqResult = res.data.data
        console.log(this.reqResult)
      })
    }
  }
</script>
<style lang='less'>
  @import '../../assets/style/school/school.less';
</style>
