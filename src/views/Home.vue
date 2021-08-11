<template>
  <div>
    <h1>List of Patients</h1>
    {{ GStore.patients }}

  </div>
</template>

<script>
// import PatientCard from "@/components/PatientCard.vue";
import api from "@/services";
// @ is an alias to /src

export default {
  name: "Home",
  inject: ["GStore"],
  components: {
    // PatientCard,
  },
  data() {
    return {};
  },
  methods: {
  },
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
  justify-content: center;
  justify-items: center;
}
.cardSection {
  justify-items: center;
}
</style>
