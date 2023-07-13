<script setup>
import { defineProps, ref, computed, defineEmits} from 'vue';

// Props
const { title } = defineProps(['title']);

// Data
const counter = ref(0);
const itemsList = ref([]);

// Computed
const hasItems = computed(() => itemsList.value.length > 0);

// Events
const emits = defineEmits(['increment', 'decrement']);

// Methods
function addItem() {
  counter.value++
  itemsList.value.push(`Item #${counter.value}`);
  emits('increment');
}

function removeItem(item) {
  const index = itemsList.value.indexOf(item);
  if (index > -1) {
    itemsList.value.splice(index, 1);
    emits('decrement');
  }
}

</script>

<template>
  <div class="card">
    <div class="card-title">
      <div class="card-image"></div>
      {{ title }}
    </div>
    <div class="card-text" v-if="!hasItems">
      <slot></slot>
    </div>
    <ul class="card-list" v-else>
      
      <li v-for="item in itemsList" :key="item">
        <a href="#" @click="removeItem(item)">{{item}}</a>
      </li>
      
    </ul>
    <button class="card-cta" @click="addItem">Add Item</button>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    flex: 1;
    width: 400px;
    background-color: #F3F3F3;
    border: solid 1px #777;
    border-top: solid 5px #A283DF;
    border-radius: 4px;
    padding-bottom: 60px;
  }
  .card-title{
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  .card-image{
    background-color: #636363;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .card-text{
    text-align: left;
    margin-bottom: 20px;
  }
  .card-list{
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
  }
  .card-list li{
    text-align: left;
    border-bottom: solid 1px #ccc;
    padding: 5px 0;
    user-select: none;
  }
  .card-list li:first-child{
    border-top: solid 1px #ccc;
  }
  .card-cta{
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    height: 40px;
    border-radius: 20px;
    background-color: #1C50A9;
    font-weight: 600;
    user-select: none;
  }
</style>