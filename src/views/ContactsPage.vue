<template>
    <Contacts/>
</template>

<script>
import Contacts from "@/components/Contacts/Contacts";

export default {
    name: "ContactsPage",
    components: {Contacts}
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
