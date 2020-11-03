<template>
  <div class="container">
    <div class="item" v-for="product in products" v-bind:key="product">
      <h3 class="title">{{ product.name }}</h3>
      <h4 class="price">${{ product.price }}</h4>
      <h4 class="color">Color: {{ product.color }}</h4>
      <button class="btn" @click="addItem(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import productsData from "../fixtures/products.json";
import store from "../store/index";

export default {
  data() {},
  computed: {
    products() {
      return productsData;
    }
  },
  methods: {
    addItem(product) {
      store.commit("addItem", product);
    }
  }
};
</script>

<style scoped>
.container {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 30px;
}

.item {
  display: flexbox;
  width: 200px;
  height: 220px;
  text-align: center;
  border: 2px solid black;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.price {
  margin-top: 10px;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.color {
  font-size: 1.2rem;
  margin-top: 10px;
}

.btn {
  font-size: 20px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  background: transparent;
  font-weight: bold;
}

.btn:hover {
  cursor: pointer;
}

.btn:active {
  color: white;
  background: black;
}
</style>
