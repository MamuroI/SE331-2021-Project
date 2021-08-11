<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-4xl font-medium">List of Patients</h1>
    <div
      class="
      grid 
      grid-cols-1 
      sm:grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-4 mt-20"
    >
      <Card
        v-for="patient in GStore.patients"
        :key="patient.id"
        :patient="patient"
      />
    </div>

    <div
      class="w-full 
      flex flex-row justify-around items-center
      my-12 text-lg font-medium"
    >
      <router-link
        v-if="canPrev"
        rel="prev"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        >prev</router-link
      >
      <router-link
        v-if="canNext"
        rel="prev"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        >next</router-link
      >
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
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    Card,
  },
  data() {
    return {
      totalPatient: null,
    };
  },
  computed: {
    canNext() {
      const totalPages = Math.ceil(this.totalPatient / 6);
      return this.page < totalPages;
    },
    canPrev() {
      return this.page > 1;
    },
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    api
      .getPatients(parseInt(routeTo.query.page))
      .then((response) => {
        next((comp) => {
          comp.GStore.patients = response.data;
          comp.totalPatient = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        // next({ name: "NetworkError" });
      });
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(routeTo, routeFrom, next) {
    api
      .getPatients(parseInt(routeTo.query.page))
      .then((response) => {
        this.GStore.patients = response.data;
        this.totalPatient = response.headers["x-total-count"];
        next();
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
};
</script>

<style scoped>
.root {
  justify-content: center;
  justify-items: center;
}
.cardSection {
  justify-items: center;
}
</style>
