<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-bind:assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import { getAssets } from "@/api";
export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },
  created() {
    this.getData();
    this.isLoading = true;
  },
  methods: {
    async getData() {
      try {
        this.assets = await getAssets();
      } catch (error) {
        throw new Error(`Something failed`);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
