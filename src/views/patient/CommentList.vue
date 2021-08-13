<template>
  <div class="comment-container">
        <h3>Comments List:</h3>
        <ul>
            <li v-for="item in comments" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        comments: {
            type: Array,
            required: true
        },
    },
}
</script>

<style>

</style>