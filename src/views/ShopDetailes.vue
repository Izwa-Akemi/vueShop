<template>
  <div class="shop-detailes">
     <h2>商品詳細</h2>
     <p>{{this.shoplist[shopId].name}}</p>
     <p>{{this.shoplist[shopId].money}}</p>
     <button @click="increase">購入個数</button>
     <p>{{ $store.state.count }}</p>
     <p>商品名:{{$store.state.ItemName}}の合計金額は{{this.shoplist[shopId].money * $store.state.countItem}}円です。</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>
<script>
export default {
 methods:{
    increase(){
      this.$store.commit('addIncrement');
    }
  },
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
};
</script>