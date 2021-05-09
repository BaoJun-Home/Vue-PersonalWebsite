<template>
  <form
    @submit.prevent="handleSubmit"
    class="message-form-container"
    ref="container"
    id="comment-area"
  >
    <div class="nick-name">
      <input
        type="text"
        placeholder="用户昵称"
        maxlength="10"
        v-model="formData.nickname"
        @focus="handleFocus"
      />
      <div class="tip">{{ formData.nickname.length }} / 10</div>
    </div>
    <div class="err name-err">{{ errData.nickname }}</div>
    <div class="content">
      <textarea
        placeholder="评论内容"
        maxlength="300"
        v-model="formData.content"
        @focus="handleFocus"
      ></textarea>
      <div class="tip">{{ formData.content.length }} / 300</div>
    </div>
    <div class="err content-err">{{ errData.content }}</div>
    <button class="submit" :disabled="isSubmiting">
      {{ isSubmiting ? "提交中..." : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      errData: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.formData.nickname) {
        this.errData.nickname = "请填写昵称";
        return;
      }
      if (!this.formData.content) {
        this.errData.content = "请填写评论内容";
        return;
      }
      // 提交评论
      this.isSubmiting = true;
      this.$emit(
        "submit",
        {
          nickname: this.formData.nickname,
          content: this.formData.content,
        },
        (msg) => {
          this.$popMessage({
            content: msg,
            type: "success",
            duration: 2000,
            container: this.$refs.container,
            callback: () => {
              this.formData.nickname = "";
              this.formData.content = "";
              this.isSubmiting = false;
            },
          });
        }
      );
    },
    handleFocus() {
      this.errData.nickname = "";
      this.errData.content = "";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.message-form-container {
  position: relative;
  input,
  textarea {
    outline: none;
    resize: none;
    border: 1px dashed @gray;
    padding: 10px;
    box-sizing: border-box;
  }
  .tip {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 12px;
    color: @gray;
  }
  .err {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: @danger;
  }
  .nick-name {
    width: 50%;
    height: 40px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    position: relative;
    height: 120px;
    textarea {
      width: 100%;
      height: 100%;
      font-size: 14px;
    }
  }
  .submit {
    border: none;
    background: @primary;
    color: #fff;
    width: 100px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    outline: none;
    &:hover {
      background: darken(@primary, 5%);
    }
    &:disabled {
      background: lighten(@primary, 10%);
      cursor: not-allowed;
    }
  }
}
</style>
