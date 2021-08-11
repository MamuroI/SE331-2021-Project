<template>
  <form class="comment-form" @submit.prevent="onSubmit">
    <div>Comment</div>
  <textarea id="comment" v-model="comment"></textarea>
  <input class="button" type="submit" value="Submit"> 
  </form>
  
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
  methods: {
    onSubmit() {
      if(this.comment === ''){
        alert('Please add comment before submit')
        return
      }
      let productComment = this.comment
      this.$emit('comment-submitted',productComment)
    }
  },
};
</script>
<style>
#comment {
  background: lightblue;
  width: 300px;
  height: 200px;
}
</style>
