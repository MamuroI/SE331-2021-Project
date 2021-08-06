<template>
  <h1>List of Patients</h1>
  <div class="container mx-auto">  
    <div class="cardSection grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-1">
      <PatientCard v-for="info in infos" :key="info.id" :info="info"/>
    </div>
  </div>
</template>

<script>
import PatientCard from '@/components/PatientCard.vue'
import api from '@/services'
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    PatientCard
  },
  data(){
    return {
      infos: [
        {
          "id": 1,
          "name": "Aisudev",
          "surname": "lnwza007",
          "status": 0
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": 1
        },
        {
          "id": 3,
          "name": "Kelvin",
          "surname": "Sss",
          "status": 2
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": "2"
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": "2"
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": "2"
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": "2"
        },
        {
          "id": 2,
          "name": "Alex",
          "surname": "Sss",
          "status": "2"
        },
      ]
    }
  },
  created(){
    api.getPatients().then((result) => {
      console.log(result.data)
    }).catch((err) => {
      console.log(err.message)
    });
  }
};
</script>

<style scoped>
  .root{
    justify-content: center;
    justify-items: center;
  }
  .cardSection{
    justify-items: center;
  }
</style>
