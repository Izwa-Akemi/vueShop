<template>
  <div class="home">
    <h2>商品情報一覧</h2>
     <div v-for="(shop,index) in shoplist" v-bind:key="index">
      <router-link :to="{name: 'ShopDetailes', params: {shopId: index}}">{{shop.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data() {
    return {
      shoplist: [
        {
          id: "1",
          name: "イチゴ",
        },
        {
          id: "2",
          name: "バナナ",
        },
        {
          id: "3",
          name: "ブドウ",
        },
      ],
    };
  }
};
</script>

<style scoped>
.home{
  color:rgb(214, 89, 110);
}
</style>