<template>
  <div class="createShop">
      <div class="head">
        <span>logo</span>|<em>创建店铺</em>
        <span class="telphone">电话</span>
      </div>
      <div class="main">
      <div class="shop_box">
        <h3><b></b>企业基本信息<small>请按照证书上的内容逐字填写</small></h3>
        <ul>
          <li>
           <span>企业法人营业执照<b>*</b></span>
            <div class="uploader">
              <el-upload
              class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                </el-upload>
                <span>单张不超过3M,支持jpeg/jpg/png</span>
            </div>
              <span @click="detailShow=!detailShow" class="smallImg">
                <img src="../../assets/img/register/smallImg.jpg" alt="">
              </span>
              <div class="firstCase"  v-show="detailShow">
                <b class="caseClose" @click="detailShow=false">×</b>
                <p>营业执照原件照片范例</p>
                <label>确保证件信息清晰、完整、不可涂改和遮盖！</label>
                <img src="../../assets/img/register/yingye_03.png" alt="">
              </div>
          </li>
          <li>
           <span>企业法人营业执照<b>*</b></span>
            <div class="uploader">
              <el-upload
              class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                </el-upload>
                <span>单张不超过3M,支持jpeg/jpg/png</span>
            </div>
              <span @click="detailShow2=!detailShow2" class="smallImg">
                <img src="../../assets/img/register/smallImg.jpg" alt="">
              </span>
              <div class="firstCase secondCase"  v-show="detailShow2">
                <b class="caseClose" @click="detailShow2=false">×</b>
                <p>营业执照原件照片范例</p>
                <label>确保证件信息清晰、完整、不可涂改和遮盖！</label>
                <img src="../../assets/img/register/yingye_03.png" alt="">
              </div>
          </li>
          <li>
          <span>法人代表姓名<b>*</b></span>
          <div style="">
          <el-input v-model="input" placeholder="请输出法人代表姓名"></el-input>
          </div>
        </li>
        
        </ul>
        
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      imageUrl: '',
      detailShow: false,
      detailShow2: false
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="less" scope>
@import '../../assets/style/variable.less';
@import '../../assets/style/base.less';
@import '../../assets/style/normalize.less';
//封装页面公共样式
#publics {
    .public () {
       width:1200px;
       margin:0 auto;
    }
    
}
.createShop{
  width:100%;
  overflow:hidden;
}
.head{ 
  #publics >.public();
  height:100px;
  .clearfix();
  span{
    flaot:left;
    width:300px;
    line-height:100px;
  }
  span.telphone{
    float:right;
    ling-heigt:100px;
  }

}
.main{ 
  #publics >.public();
  border:1px solid #ccc;
  .shop_box{
    h3{ 
      width:100%;
      height:40px;
      line-height:40px;
      background:#FAFAFA;
      margin-bottom:10px;
      b{
        display: inline-block;
        height: 16px;
        margin: 0 5px 0 10px;
        border-left: 3px solid #F95146;
      }
      small{
        color: #A2A2A2;
        display:inline-block;
        margin-left:10px;
        font-size:12px;
        color:#ccc;
      }
    }
    ul{
      li{
        .clearfix();
        width:100%;
        span{
          float: left;
          display: inline-block;
          width: 145px;
          text-align: right;
          line-height: 34px;
          font-size:12px;
          margin-right:10px;
          b{
            color:#f00;
          }
        }
        .uploader{
          float:left;
          span{ 
            width:100%;
            display:block;
            font-size:12px;
            color:#ccc;
          }
        }
        span.smallImg{ 
          float:left;
          cursor:pointer;
          width:178px;
          margin-right:20px;
        }
        .firstCase{
          float:left;
          background: #fff none repeat scroll 0 0;
          box-shadow: 0 0 20px 3px #eaeaea;
          height: 430px;
          text-align: center;
          position:absolute;
          left:710px;
          width: 470px;
          z-index: 100;
          p{
            color: #000;
            font-size: 14px;
            line-height:30px;
            text-align:left;
            text-indent:6px;
          }
          label{
            font-size:12px;
            color:#ccc;
            line-height:30px;
          }
          b{
            background: #333 none repeat scroll 0 0;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            height: 18px;
            line-height: 18px;
            opacity: 0.7;
            position: absolute;
            right: -9px;
            top: -9px;
            width: 18px;
          }
        }
        .secondCase{
          top:150px;
        }

      }
    }
  }
}
.foot{ 
  #publics >.public()
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
