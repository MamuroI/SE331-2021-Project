<template>
  <div>
    <form class="comment-form" @submit.prevent="onSubmit">
      <label for="comment">Comment:</label>
      <textarea id="details" v-model="details"></textarea>
    </form>
     <button class="
          px-5
          py-2
          rounded
          w-64
          mx-2
          transition-all
          bg-yellow-200
          hover:bg-yellow-400
          hover:shadow-md
        " v-on:click="count += 1">Submit</button>
       
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  data() {
    return {
      details: "",
      count: 0
    };
  },
  method: {
    onSubmit() {
      alert("test")
      if (this.details === "") {
        alert("Please comment before submit!");
        return;
      }
      let productComment = {
        comment: this.details,
      };
      this.$emit("commentdetails", productComment);
      this.details = "";
    },
    sayHi() {
      console.log("Hi");
    },
  },
};
</script>

<style>
</style>