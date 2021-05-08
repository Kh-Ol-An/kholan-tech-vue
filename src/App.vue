<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "~@/styles/normalize.scss";
@import "~@/styles/reset.scss";
@import "~@/styles/fonts.scss";
@import "~@/styles/base.scss";
@import "~@/styles/section.scss";
</style>
