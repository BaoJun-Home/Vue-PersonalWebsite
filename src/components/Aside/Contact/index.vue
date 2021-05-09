<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" href="https://github.com/BaoJun-Home">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span class="title">{{ datas.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${datas.mail}`">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span class="title">{{ datas.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${datas.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span class="title">{{ datas.qq }}</span>
      </a>
      <div class="qr-code">
        <img :src="datas.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span class="title">{{ datas.weixin }}</span>
      </a>
      <div class="qr-code">
        <img :src="datas.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("setting", ["datas"]),
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

@liHeight: 30px;
.contact-container {
  padding: 30px;
  box-sizing: border-box;
  color: @gray;
  li {
    height: @liHeight;
    line-height: @liHeight;
    margin: 20px 0;
    position: relative;
    &:hover {
      .qr-code {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-items: center;
      .icon {
        font-size: 26px;
        width: 36px;
      }
      .title {
        font-size: 14px;
      }
    }
    .qr-code {
      position: absolute;
      left: 0;
      bottom: @liHeight;
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
      transform: scaleY(0);
      transition: all 0.3s;
      transform-origin: center bottom;
      border-radius: 5px;
      cursor: text;
      img {
        width: 140px;
        height: 140px;
        display: block;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff;
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
</style>
