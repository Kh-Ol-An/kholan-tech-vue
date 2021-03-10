<template>
    <li class="WENS__field-cell" :class="player + '-finish-' + finish">{{ mark }}{{ finish }}</li>
</template>

<script>
export default {
    name: "finishCells",
    props: ["player", "finish", "mark"],
}
</script>

<style lang="scss" scoped>

</style>