<template>
  <div :class="langCss">
    <div class="vue-css">
      <p>{{$t('message.hello')}}</p>
      <button @click="switchLang('en')">{{$t('message.switchEn')}}</button>
      <button @click="switchLang('cn')">{{$t('message.switchCn')}}</button>
      <button @click="switchLang('ja')" :title="$t('message.switchJa')">{{$t('message.switchJa')}}</button>
      <!-- title演示↑ -->
      <hr>
    </div>
    <!-- elementui-dialog -->
    <el-button type="text" @click="dialogVisible = true">{{$t('message.click')}}</el-button>
    <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>{{$t('message.msg')}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('message.cancel')}}</el-button>
        <el-button type="primary" @click="dialogVisible = false">{{$t('message.confirm')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "i18n",
  data() {
    return {
      langCss: window.localStorage.getItem("lang") || "cn",
      dialogVisible: false
    };
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      //把语言保存在localStorage中
      localStorage.setItem("lang", lang);
      //切换父级class
      this.langCss = lang;
    },
    handleClose(done) {
      this.$confirm(this.$t("message.confirm")) //js内部切换
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-css button {
  width: 150px;
}
.en .vue-css button {
  color: steelblue;
}
.cn .vue-css button {
  color: #666;
}
.ja .vue-css button {
  color: seagreen;
}
</style>
