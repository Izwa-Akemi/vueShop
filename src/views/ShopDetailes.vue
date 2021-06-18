<template>
  <div class="shop-detailes">
    <h2>商品詳細</h2>
     <div v-for="shop in shoplist" v-bind:key="shop.id">
     <p>shop.name</p>
     <p>shop.money</p>
    </div>
    <router-link to="/">戻る</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoplist: [
        {
          id: "1",
          name: "イチゴ",
          money:1000
        },
        {
          id: "2",
          name: "バナナ",
           money:2000
        },
        {
          id: "3",
          name: "ブドウ",
          money:3000
        },
      ]
    };
  },
  props:['shopId'],//ShopListからidを受け取る
  methods:function(){
    if(this.props === this.shoplist.filter(this.shoplist.id)){//もし、受け取ったidがshopList配列のどれかのidと完全一致した場合、
       return　//一致したidに付随するお金と商品名を表示する。
    }
  }
};
</script>