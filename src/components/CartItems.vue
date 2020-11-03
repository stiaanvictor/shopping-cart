<template>
  <div v-if="items.length === 0">
    <h3>Your cart is empty :(</h3>
  </div>
  <div v-else class="container">
    <div class="items" v-for="item in items" v-bind:key="item">
      <div>
        <h3>Item: {{ item.name }} | Price: ${{ item.price }}</h3>
        <button @click="remove(item)" class="btn">Remove</button>
      </div>
    </div>
    <br />
    <br />
    <h3 class="price">Total of ${{ totalPrice }}</h3>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  computed: {
    items() {
      return store.getters.items;
    },
    totalPrice() {
      let num = 0;
      for (let i = 0; i < this.items.length; i++) {
        num += parseInt(this.items[i].price);
      }
      return num;
    }
  },
  methods: {
    remove(item) {
      store.dispatch("removeItem", item);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 10px;
  padding-right: 10px;
}

.items {
  border: 2px solid black;
  margin-top: 10px;
  display: flex;
  padding-left: 10px;
  position: relative;
}

.btn {
  cursor: pointer;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  right: 10px;
  top: 35%;
}
</style>
