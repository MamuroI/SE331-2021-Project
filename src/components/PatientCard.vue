<template>
    <div class="card-div">
        <div class="imageDiv">

        </div>
        <div class="personInfo">
            <h3>Name : {{info.name}}</h3>
            <h3>Surname : {{info.name}}</h3>
            <h4>Status : {{ status }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PatientCard',
    props: {
        info: {
            type: Object,
            required: false
        }
    },
    computed: {
        status:function checkStatus() {
            if(this.info.status == 0){
                return "Non-vaccinated"
            }else if(this.info.status == 1){
                return this.info.status+" dose"
            }else{
                return this.info.status+" doses"
            }
        }
    }
}
</script>

<style>
.card-div {
    align-items: center;
    width: 90%;
    padding: 15px;
    background: pink;
    margin-bottom: 20px;
    border-radius: 10px;
}
h3 {
    color: blue;
}
h4 {
    color: black;
}
</style>