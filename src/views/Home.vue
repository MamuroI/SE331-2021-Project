<template>
  <div class="container mx-auto mt-10 root">
    <h1>List of Patients</h1>
    <div
      class="
      grid 
      grid-cols-1 
      sm:grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-4"
    >
      <Card
        v-for="patient in GStore.patients"
        :key="patient.id"
        :patient="patient"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import api from "@/services";
// @ is an alias to /src

export default {
  name: "Home",
  inject: ["GStore"],
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {},
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    api
      .getPatients()
      .then((response) => {
        next((comp) => {
          comp.GStore.patients = response.data;
        });
      })
      .catch(() => {
        // next({ name: "NetworkError" });
      });
  },
};
</script>

<style scoped>
.root {
  
}
.cardSection {
  justify-items: center;
}
</style>
