<template>
  <div class="dessert-card">
    <div class="image-wrapper">
      <img :src="dessert.image" :alt="dessert.name" class="dessert-image" />
      <button 
        class="favorite-btn" 
        :class="{ 'is-active': dessert.isFavorite }"
        @click="$emit('toggle-favorite', dessert.id)"
      >
        ♥
      </button>
    </div>
    <div class="card-content">
      <h3 class="dessert-name">{{ dessert.name }}</h3>
      <p class="dessert-desc">{{ dessert.desc }}</p>
      <div class="card-footer">
        <span class="dessert-price">NT$ {{ dessert.price }}</span>
        <button class="order-btn" @click="$emit('add-to-cart', dessert)">
          預訂
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  dessert: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.dessert-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.dessert-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 比例 */
  background: #f4f4f4; /* 圖片載入前的底色 */
}

.dessert-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favorite-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.favorite-btn.is-active {
  color: #e74c3c;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.dessert-name {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.25rem;
  color: #2c3e50;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
}

.dessert-desc {
  font-size: 0.9rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0 0 20px 0;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 16px;
}

.dessert-price {
  font-family: 'Noto Serif TC', serif;
  font-weight: 600;
  color: #d3a15c; /* 優雅的金色 */
  font-size: 1.1rem;
}

.order-btn {
  background: #2c3e50;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;
  letter-spacing: 1px;
}

.order-btn:hover {
  background: #d3a15c;
}
</style>