<template>
    <li class="WENS__field-cell" :class="player + '-start-' + start">{{ mark }}{{ start }}</li>
</template>

<script>
export default {
    name: "startCells",
    props: ["player", "start", "mark"],
}
</script>

<style lang="scss" scoped>

</style>