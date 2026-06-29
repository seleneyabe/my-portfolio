<template>
  <div class="salon-app">
    <!-- 導覽列 -->
    <header class="navbar">
      <div class="nav-brand" @click="currentTab = 'home'">
        <h1>Café Palette</h1>
        <span>啡色選集</span>
      </div>
      
      <!-- 漢堡選單按鈕 (手機版用) -->
      <div class="menu-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">☰</div>

      <nav class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <button :class="{ active: currentTab === 'home' }" @click="switchTab('home')">品牌首頁</button>
        <button :class="{ active: currentTab === 'dessert' }" @click="switchTab('dessert')">法式甜點</button>
        <button :class="{ active: currentTab === 'beverage' }" @click="switchTab('beverage')">飲品特調</button>
        <button :class="{ active: currentTab === 'fav' }" @click="switchTab('fav')">
          收藏清單 <span v-if="favIds.length" class="badge">{{ favIds.length }}</span>
        </button>
        <button :class="{ active: currentTab === 'book' }" @click="switchTab('book', null)">線上預訂</button>
      </nav>
    </header>

    <!-- 頁面視圖區 (加上淡入淡出動畫) -->
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <div :key="currentTab">
          
          <!-- 公用標題區 (首頁不需要這個，其他頁面需要) -->
          <div v-if="currentTab !== 'home'" class="view-header">
            <h2>{{ viewTitles[currentTab].title }}</h2>
            <p>{{ viewTitles[currentTab].sub }}</p>
          </div>

          <!-- 各頁面元件切換 -->
          <HomeView v-if="currentTab === 'home'" @go-tab="switchTab" />

          <ProductGrid 
            v-else-if="currentTab === 'dessert'"
            :items="dessertsData" :fav-ids="favIds"
            @toggle-fav="handleToggleFav" @go-book="id => switchTab('book', id)"
          />

          <ProductGrid 
            v-else-if="currentTab === 'beverage'"
            :items="beveragesData" :fav-ids="favIds"
            @toggle-fav="handleToggleFav" @go-book="id => switchTab('book', id)"
          />

          <ProductGrid 
            v-else-if="currentTab === 'fav'"
            :items="favoritedList" :fav-ids="favIds"
            @toggle-fav="handleToggleFav" @go-book="id => switchTab('book', id)"
          />

          <BookingView 
            v-else-if="currentTab === 'book'"
            :desserts="dessertsData" :beverages="beveragesData" :all-products="allProducts"
            :target-id="bookTargetId" @order-success="switchTab('home')"
          />
          
        </div>
      </transition>
    </main>

    <footer class="footer">
      <p>© 2026 Lynn'dessert Salon de Pâtisserie. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { dessertsData, beveragesData, allProducts } from './data/products';
import HomeView from './components/HomeView.vue';
import ProductGrid from './components/ProductGrid.vue';
import BookingView from './components/BookingView.vue';

const currentTab = ref('home'); // 預設進來是首頁
const favIds = ref([]); 
const bookTargetId = ref(null);
const isMobileMenuOpen = ref(false);

const viewTitles = {
  dessert: { title: "經典法式甜點", sub: "Patisserie - 每日晨間職人手工烘焙，限量供應" },
  beverage: { title: "特調飲品選單", sub: "Beverages - 佐以甜點的完美層次風味" },
  fav: { title: "您的甜蜜清單", sub: "My Favorites - 隨時回來檢視您心儀的滋味" },
  book: { title: "預約一份美好", sub: "Reservation - 門市自取專屬保留服務" }
};

const favoritedList = computed(() => {
  return allProducts.filter(item => favIds.value.includes(item.id));
});

const switchTab = (tabName, productId = null) => {
  currentTab.value = tabName;
  if (productId !== undefined) bookTargetId.value = productId;
  isMobileMenuOpen.value = false; // 切換後自動收起手機選單
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleToggleFav = (id) => {
  const index = favIds.value.indexOf(id);
  if (index > -1) favIds.value.splice(index, 1);
  else favIds.value.push(id);
};
</script>

<style>
/* 全域字體與背景設定 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap');
body {
  margin: 0;
  font-family: "Helvetica Neue", "PingFang TC", "Noto Sans TC", sans-serif;
  background-color: #FAF8F5; /* 高質感的燕麥白背景 */
  color: #333333;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.salon-app { min-height: 100vh; display: flex; flex-direction: column; }

.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 5%;
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px solid #EFECE6;
  position: sticky; top: 0; z-index: 100;
}

.nav-brand { cursor: pointer; }
.nav-brand h1 { margin: 0; font-size: 1.8rem; color: #2C2A29; font-family: 'Playfair Display', serif; }
.nav-brand span { font-size: 0.75rem; letter-spacing: 0.2em; color: #8A7352; }

.menu-toggle {
  display: none; font-size: 1.5rem; cursor: pointer; color: #2C2A29;
}

.nav-links { display: flex; gap: 0.5rem; }
.nav-links button {
  background: transparent; border: none; padding: 0.6rem 1rem; font-size: 0.95rem;
  color: #666; cursor: pointer; border-radius: 20px; transition: all 0.2s; position: relative;
}
.nav-links button:hover, .nav-links button.active {
  color: #2C2A29; font-weight: 600; background-color: #F0ECE1;
}

.badge {
  background: #8A7352; color: white; font-size: 0.7rem; padding: 2px 6px;
  border-radius: 10px; vertical-align: top; margin-left: 4px;
}

.main-content { flex: 1; max-width: 1200px; width: 90%; margin: 2rem auto 4rem auto; }
.view-header { text-align: center; margin-bottom: 3rem; }
.view-header h2 { font-size: 2rem; color: #2C2A29; margin: 0 0 0.5rem 0; letter-spacing: 0.08em; font-family: 'Playfair Display', serif; }
.view-header p { color: #888; margin: 0; font-size: 0.95rem; letter-spacing: 0.05em; }

.footer { text-align: center; padding: 2rem; background: #2C2A29; color: #888; font-size: 0.8rem; letter-spacing: 0.05em; }

/* Vue 切換動畫設定 (超強質感來源) */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-enter-from { opacity: 0; transform: translateY(10px); }
.fade-leave-to { opacity: 0; transform: translateY(-10px); }

/* RWD 手機版導覽列選單 */
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    background: #fff; flex-direction: column; padding: 1rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-top: 1px solid #EFECE6;
  }
  .nav-links.mobile-open { display: flex; }
  .nav-links button { border-radius: 8px; text-align: left; padding: 1rem; }
}
</style>