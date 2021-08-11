<template>
  <div
    class="
    w-full
    "
  >
    <h3>{{ patient.name }}</h3>
    <h3>{{ patient.surname }}</h3>
    <h4>{{ vaccinateStatus }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    vaccinateStatus() {
      console.log(this.patient.status);
      if(this.patient.status == 0){
          return 'No Vaccinate'
      }
      return this.patient.status + ' doses'
    },
  },
};
</script>
