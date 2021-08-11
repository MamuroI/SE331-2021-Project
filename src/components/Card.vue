<template>
  <div
    class="
    w-full shadow-lg
    bg-blue-300
    p-5 m-1 rounded
    "
  >
    <h2
      class="
    font-bold
    text-xl
    "
    >
      Name: {{ patient.name }}
    </h2>
    <h3>Surname: {{ patient.surname }}</h3>
    <h4>status: {{ vaccinateStatus }}</h4>
    <div
      class="
        w-full 
        flex 
        flex-row
        justify-center 
        items-center 
        my-2
      "
    >
      <button
        @click="routing('Vaccine')"
        class="
                px-5 py-2 rounded w-32 mx-2
                transition-all
                bg-yellow-200
                hover:bg-yellow-400
                hover:shadow-md
            "
      >
        vacinne
      </button>
      <button
        @click="routing('Info')"
        class="
                px-5 py-2 rounded w-32 mx-2
                transition-all
                bg-green-200
                hover:bg-green-400
                hover:shadow-md
            "
      >
        info
      </button>
      <button
        @click="routing('Comment')"
        class="
                px-5 py-2 rounded w-32 mx-2
                transition-all
                bg-blue-200
                hover:bg-blue-400
                hover:shadow-md
            "
      >
        comment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    vaccinateStatus() {
      if (this.patient.status == 0) {
        return "No Vaccinate";
      }
      return this.patient.status + " doses";
    },
  },
  methods: {
    routing(name) {
      this.GStore.selectedPatient = this.patient.id
      this.$router.push({ name: name });
    },
  },
};
</script>
