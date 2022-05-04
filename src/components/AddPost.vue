<template>
  <div class="card mb-5 rounded-0 border-2 position-relative">
    <h2 class="text-center fw-bold py-3 mb-0 fs-5">張貼動態</h2>
    <div class="position-absolute border border-dark border-2 w-100 py-4"
         style="z-index: -1; top: 10px; left: -6px"></div>
  </div>
  <div class="card border border-dark border-2 shadow-black p-5">
    <form class="needs-validation"
          novalidate>
      <div class="form-group mb-3">
        <label for="content">貼文內容</label>
        <textarea v-model="content"
                  class="form-control"
                  id="content"
                  rows="5"
                  placeholder="輸入您的貼文內容"></textarea>
      </div>
      <div class="input-group mb-2">
        <label class="btn btn-dark">
          <input id="upload_img"
                 style="display: none"
                 type="file"
                 name="files"
                 ref="files"
                 class="is-valid"
                 @change="uploadFile" />
          上傳圖片
        </label>
      </div>
      <img src="../assets/img/photo1.png"
           alt="photo1"
           class="w-100 img-fluid mb-2" />
      <p class="text-danger text-center mb-2 fs-7 d-none">
        圖片檔案過大，僅限 1mb 以下檔案
        <br />
        圖片格式錯誤，僅限 JPG、PNG 圖片
      </p>
      <div class="d-grid gap-2">
        <button type="submit"
                class="btn btn-gray-dark border border-dark border-2 fw-bold">
          送出貼文
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { createPostApi } from '@/api/axios.js';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const userId = ref('');
    const content = ref('');
    const image = ref('');

    const uploadFile = (e) => {
      const imageFile = e.target.files[0];
      const apiUrl = 'https://api.imgur.com/3/image';
      const apiKey = '5e70d28ee752c26';
      let settings = {
        method: 'POST',
        url: apiUrl,
        headers: {
          Authorization: 'Client-ID ' + apiKey,
        },
        mimeType: 'multipart/form-data',
      };
      let formData = new FormData();
      formData.append('image', imageFile);
      settings.data = formData;
      console.log(settings.data);
      axios(settings)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const postForm = {
      content: content.value,
      image: image.value,
    };
    const createPost = async () => {
      try {
        const res = await createPostApi(postForm);
      } catch (err) {
        console.log(err);
      }
    };
    return { userId, content, image, uploadFile, createPost };
  },
};
</script>
