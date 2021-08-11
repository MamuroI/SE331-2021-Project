<template>
  <div class="container mx-auto">
      <h1 id="header">Patient Info</h1>
      <div class="patientInfo mx-auto" v-if="GStore.patientInfo">
          <div>
              <img :src="require('../../assets/emptyimage.png')" width="200" class="mx-auto" />
          </div>
          <div class="infolist grid grid-cols-1">
            <h3>name: {{ GStore.patientInfo.name }}</h3>
            <h3>surname: {{ GStore.patientInfo.surname }}</h3>
            <h3>age: {{ GStore.patientInfo.age }} years old</h3>
            <h3>district: {{ GStore.patientInfo.address.district }}</h3>
            <h3>city: {{ GStore.patientInfo.address.city }}</h3>
            <h3>state: {{ GStore.patientInfo.address.state }}</h3>
            <h3>country: {{ GStore.patientInfo.address.country }}</h3>
            <h3 v-if="GStore.patientInfo.address.more">more: {{ GStore.patientInfo.address.more }}</h3>
          </div>
          <button
            @click="goBack"
            class="
            px-5
            py-2
            rounded
            w-32
            mx-2
            transition-all
            bg-green-200
            hover:bg-green-400
            hover:shadow-md
            "
            >
                back
            </button>
      </div>
  </div>
</template>

<script>
export default {
    inject: ['GStore'],
    methods: {
        goBack() {
            this.$router.push({ name: "Home" });
        },
    }
}
</script>

<style scoped>
.root{
    justify-content: center;
    justify-items: center;
}
#header {
    font-weight: bold;
    font-size: 32px
}
h3 {
    font-size: 24px;
}
.patientInfo{
    background: lightblue;
    width: 500px;
    height: auto;
    border-radius: 20px;
    padding: 15px;
}
.infolist{
    text-align: left;
}
</style>