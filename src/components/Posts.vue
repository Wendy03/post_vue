<template>
  <div>
    <template v-if="postsList.length > 0">
      <ul class="ps-0">
        <li v-for="post in postsList"
            :key="post._id"
            class="card h-100 py-4 px-4 mb-3 border-2 shadow-black">
          <div class="d-flex align-items-center mb-3">
            <img class="me-3 img-fluid rounded-circle border border-2 border-dark user-photo-sm"
                 :src=post.user.photo
                 alt="{{ post.user.name }}" />
            <div class="d-flex flex-column mt-2">
              <a href="#"
                 class="mb-0 fw-bold">{{ post.user.name }}</a>
              <small class="text-muted">{{ formatDate(post.createdAt) }}</small>
            </div>
          </div>
          <p>
            {{ post.content }}
          </p>
          <img v-if="post.image"
               :src="post.image"
               alt="photo1"
               class="img-fluid" />
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="card border-2 shadow-black">
        <div class="card-header bg-white">
          <div class="d-flex">
            <div class="p-1 bg-danger border border-light rounded-circle me-1"></div>
            <div class="p-1 bg-success border border-light rounded-circle me-1"></div>
            <div class="p-1 rounded-circle border border-light rounded-circle bg-warning"></div>
          </div>
        </div>
        <div class="card-body py-5">
          <p class="card-text text-muted text-center">
            目前尚無動態，新增一則貼文吧！
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { getPostsApi } from '@/api/axios.js';
import { ref, toRefs, watch } from 'vue';
import moment from 'moment';

export default {
  props: {
    initialPostsList: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const postsList = toRefs(props).initialPostsList;

    const formatDate = (date) => {
      return moment(date).format('YYYY/MM/DD HH:mm');
    };

    return { postsList, formatDate };
  },
};
</script>
