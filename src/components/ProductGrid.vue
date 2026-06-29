<template>
  <div class="grid-wrapper">
    <div v-if="items.length === 0" class="empty-state">
      <p>這裡目前空空如也，快去逛逛吧！</p>
    </div>

    <div v-else class="grid-container">
      <div v-for="item in items" :key="item.id" class="dessert-card">
        <div class="image-box">
          <img :src="item.image" :alt="item.name" loading="lazy" />
          <button class="fav-btn" :class="{ active: favIds.includes(item.id) }" @click="$emit('toggle-fav', item.id)" title="加入收藏">♥</button>
        </div>
        <div class="card-body">
          <div class="title-row">
            <h3 class="name">{{ item.name }}</h3>
            <span class="price">NT$ {{ item.price }}</span>
          </div>
          <p class="sub-name">{{ item.subName }}</p>
          <p class="desc">{{ item.desc }}</p>
        </div>
        <div class="card-footer">
          <!-- 根據 ID 判斷是預訂甜點還是飲品 -->
          <button class="book-btn" @click="$emit('go-book', item.id)">
            預訂此項
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  favIds: { type: Array, default: () => [] }
});
defineEmits(['toggle-fav', 'go-book']);
</script>

<style scoped>
/* 此處樣式與上次完全相同，保持彈性防爆版 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem 2rem;
}
.dessert-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #F0ECE1;
}
.dessert-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.08); }
.image-box { position: relative; width: 100%; height: 220px; background-color: #F7F5F0; }
.image-box img { width: 100%; height: 100%; object-fit: cover; }
.fav-btn {
  position: absolute; top: 12px; right: 12px; width: 38px; height: 38px;
  border-radius: 50%; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(4px);
  border: none; font-size: 1.2rem; color: #ccc; cursor: pointer; display: flex;
  align-items: center; justify-content: center; transition: all 0.2s;
}
.fav-btn.active { color: #8A7352; transform: scale(1.1); }
.card-body { padding: 1.5rem; flex-grow: 1; }
.title-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.2rem; }
.name { font-size: 1.15rem; font-weight: 600; color: #2C2A29; margin: 0; letter-spacing: 0.05em; }
.price { font-weight: 600; color: #8A7352; font-size: 1.05rem; }
.sub-name { font-size: 0.8rem; color: #888; font-style: italic; margin: 0 0 1rem 0; }
.desc { font-size: 0.9rem; color: #666; line-height: 1.6; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-footer { padding: 0 1.5rem 1.5rem 1.5rem; }
.book-btn { width: 100%; padding: 0.75rem; background-color: #2C2A29; color: #FDFBF7; border: none; border-radius: 6px; font-size: 0.9rem; letter-spacing: 0.1em; cursor: pointer; transition: background 0.2s; }
.book-btn:hover { background-color: #8A7352; }
.empty-state { text-align: center; padding: 4rem 1rem; color: #888; font-size: 1.1rem; }
</style>