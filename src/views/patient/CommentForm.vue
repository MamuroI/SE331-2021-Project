<template>
  <form class="comment-form">
    <label for="comment">Comment:</label>
    <textarea id="details" v-model="details"></textarea>
    <button @click="onSubmit">Submit</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            details: ""
        }
    },
    method: {
        onSubmit(){
            if(this.details === ""){
                alert('Please comment before submit!')
                return
            }
            this.$emit('comment-details',this.details)
            this.details = ""
        }
        
    }
};
</script>

<style>
</style>