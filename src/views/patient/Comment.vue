<template>
  <div>Comment</div>
</template>

<script>
export default {
  inject: ["GStore"],
  data() {
    return {
      newComment: "",
      patient:null
    };
  },
  created() {
    this.patient = this.GStore.patients.find(item => item.id == this.GStore.selectedPatient)
  },
};
</script>
