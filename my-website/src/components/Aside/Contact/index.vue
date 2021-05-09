<template>
  <ul class="contact-container">
    <li v-for="item in itemList" :key="item.id">
      <a :href="item.linkUrl">
        <div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span class="title">{{ item.title }}</span>
      </a>
      <div class="qr-code" v-if="item.qrCodeUrl">
        <img :src="item.qrCodeUrl" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  data() {
    return {
      itemList: [
        {
          id: 1001,
          icon: "github",
          title: "BaoJun-Home",
          linkUrl: "https://github.com/BaoJun-Home?tab=repositories",
          qrCodeUrl: undefined,
        },
        {
          id: 1002,
          icon: "email",
          title: "331332140@qq.com",
          linkUrl: "mailto:331332140@qq.com",
          qrCodeUrl: undefined,
        },
        {
          id: 1003,
          icon: "qq",
          title: "331332140",
          linkUrl:
            "tencent://message/?Menu=yes&uin=331332140&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          qrCodeUrl:
            "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        },
        {
          id: 1004,
          icon: "github",
          title: "BaoJun-Home",
          linkUrl: "#",
          qrCodeUrl:
            "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
        },
      ],
    };
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
