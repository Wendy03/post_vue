<template>
  <NavBar />
  <section class="container mt-7 px-lg-12">
    <div class="row">
      <div class="col-md-7">
        <router-view />
      </div>
      <div class="col-md-5 d-md-block d-none">
        <Sidebar />
      </div>
    </div>
    <FooterBar />
  </section>
</template>

<script>
import NavBar from '@/components/Nav.vue';
import Sidebar from '@/components/Sidebar.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  components: {
    NavBar,
    Sidebar,
    FooterBar,
  },
};
</script>
