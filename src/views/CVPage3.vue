<template>
    <div>
        <Lang/>
        <Header/>
        <Summary/>
        <HardSkills/>
        <SoftSkills/>
        <Experience/>
        <Education/>
        <Portfolio/>
        <Hobbies/>
        <Footer/>
    </div>
</template>

<script>
import Lang from '@/components/CV3/Lang.vue';
import Header from '@/components/CV3/Header.vue';
import Summary from '@/components/CV3/Summary.vue';
import HardSkills from '@/components/CV3/HardSkills.vue';
import SoftSkills from '@/components/CV3/SoftSkills.vue';
import Experience from '@/components/CV3/Experience.vue';
import Education from '@/components/CV3/Education.vue';
import Portfolio from '@/components/CV3/Portfolio.vue';
import Hobbies from '@/components/CV3/Hobbies.vue';
import Footer from '@/components/CV3/Footer.vue';

export default {
    name: "CVPage3",
    components: {
        Lang,
        Header,
        Summary,
        HardSkills,
        SoftSkills,
        Experience,
        Education,
        Portfolio,
        Hobbies,
        Footer,
    }
};
</script>

<style scoped lang="scss">
</style>
