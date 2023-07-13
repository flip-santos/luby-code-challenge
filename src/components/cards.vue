<script setup>
import Card from './card.vue';
import { ref } from 'vue';

const itemCounter = ref(0);

function incrementCounter() {
  itemCounter.value++;
}

function decrementCounter() {
  itemCounter.value--;
}
</script>

<template>
  <div class="cards">   
    <h2 class="cards-title">Item Counter: {{ itemCounter }}</h2>
    <div class="cards-row">
      
      <Card 
        title="Card 1" 
        @increment="incrementCounter" 
        @decrement="decrementCounter"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae earum quidem laborum! Magnam, praesentium.
      </Card>
      <Card 
        title="Card 2"
        @increment="incrementCounter" 
        @decrement="decrementCounter"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium perferendis libero autem aspernatur iusto voluptate enim, quibusdam hic sequi. Similique suscipit et veniam sed magnam reprehenderit omnis doloremque ab!
      </Card>

    </div>
  </div>
</template>

<style scoped>
.cards {
  text-align: left;
}
.cards-title {
  font-size: 2rem;
}
.cards-row {
  display: flex;
  gap: 10px
}
</style>