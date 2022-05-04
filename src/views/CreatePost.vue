<template>
  <AddPost />
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPostsApi } from '@/api/axios';
import AddPost from '@/components/AddPost.vue';
export default {
  components: {
    AddPost,
  },
};
</script>
