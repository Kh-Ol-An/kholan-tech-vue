<template>
    <CV/>
</template>

<script>
import CV from "@/components/CV/CV"

export default {
    name: "CVPage",
    components: {CV}
};
</script>

<style scoped lang="scss">
div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
</style>
