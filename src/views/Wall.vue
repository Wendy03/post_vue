<template>
  <SearchBar @clickSearch="clickSearch"
             @changeOption="changeOption" />
  <Posts :initialPostsList="postsList" />
</template>

<script>
import { ref, watch } from 'vue';
import { getPostsApi } from '@/api/axios';
import SearchBar from '@/components/Search.vue';
import Posts from '@/components/Posts.vue';
export default {
  components: {
    SearchBar,
    Posts,
  },
  setup() {
    const postsList = ref([]);
    const keyword = ref('');
    const sortby = ref('');

    const clickSearch = (text) => {
      keyword.value = text;
    };

    const changeOption = (data) => {
      sortby.value = data;
    };

    const getPosts = async (paramsObj) => {
      try {
        const res = await getPostsApi(paramsObj);
        postsList.value = res.data.posts;
      } catch (err) {
        console.log(err);
      }
    };

    watch(
      [keyword, sortby],
      () => {
        const paramsObj = {
          keyword: `${keyword.value}`,
          sortby: `${sortby.value}`,
        };
        getPosts(paramsObj);
      },
      { immediate: true }
    );

    return { postsList, clickSearch, changeOption, keyword, sortby };
  },
};
</script>
