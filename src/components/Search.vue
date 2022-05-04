<template>
  <div class="row">
    <div class="col-md-4 pe-1 mb-md-2 mb-3">
      <select v-model="sortValue"
              @change="optionBtn"
              id="newPost"
              class="form-select py-2">
        <option v-for="item in sortArr.arr"
                :value="item.value"
                :key="item.value"
                :selected="item.value === sortValue">{{ item.name }} </option>"
        <!-- <option value="old">舊的貼文</option> -->
      </select>
    </div>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text"
               class="form-control"
               v-model="searchText"
               placeholder="搜尋貼文"
               aria-label="search"
               aria-describedby="button-search" />
        <button class="btn btn-primary"
                type="button"
                id="button-search">
          <span class="material-icons-outlined"
                @click.prevent="searchBtn"> search </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
export default {
  setup(props, { emit }) {
    const searchText = ref('');
    const sortValue = ref('new');
    const sortArr = reactive({
      arr: [
        { value: 'new', name: '最新貼文' },
        { value: 'old', name: '舊的貼文' },
      ],
    });

    const searchBtn = () => {
      emit('clickSearch', searchText.value);
    };
    const optionBtn = (e) => {
      sortValue.value = e.target.value;
      emit('changeOption', sortValue.value);
    };
    return { searchText, sortValue, sortArr, searchBtn, optionBtn };
  },
};
</script>
