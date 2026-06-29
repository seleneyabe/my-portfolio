<template>
  <div class="home-wrapper">
    <div class="hero-section">
      <div class="hero-content">
        <span class="subtitle fade-in-up delay-1">啡色選集</span>
        <h2 class="title fade-in-up delay-2">Café Palette</h2>
        <p class="desc fade-in-up delay-3">
          每一道甜點，都是時間與工藝的結晶。<br>
          為您的日常，留一段充滿法式優雅的甜蜜時光。
        </p>
        <div class="btn-group fade-in-up delay-4">
          <button class="btn-primary" @click="$emit('go-tab', 'dessert')">探索甜點</button>
          <button class="btn-outline" @click="$emit('go-tab', 'beverage')">品味飲品</button>
        </div>
      </div>
    </div>
    
    <div class="features-section">
      <div class="feature fade-in-up delay-4">
        <h3>精選食材</h3>
        <p>嚴選法國AOP認證發酵奶油與在地無毒小農鮮果，品嚐最純粹的自然風味。</p>
      </div>
      <div class="feature fade-in-up delay-5">
        <h3>職人手作</h3>
        <p>每日清晨醒麵烘焙，堅持繁複的法式傳統工序，只為呈現完美口感。</p>
      </div>
      <div class="feature fade-in-up delay-6">
        <h3>靜謐空間</h3>
        <p>搭配特調飲品，在充滿光影與音樂的空間中，享受一段專屬於您的寧靜。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 2rem;
}

.hero-section {
  position: relative;
  min-height: 65vh;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* 如果有 hero.png 圖片會覆蓋漸層，若無則顯示質感漸層背景 */
  background: linear-gradient(135deg, rgba(245,243,238,0.9) 0%, rgba(226,219,204,0.9) 100%), url('/images/hero.png') center/cover no-repeat;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.hero-content {
  padding: 2rem;
  max-width: 600px;
  z-index: 2;
}

.subtitle {
  font-family: Georgia, serif;
  font-style: italic;
  color: #8A7352;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
}

.title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4.5rem;
  color: #2C2A29;
  margin: 1rem 0;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.desc {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  letter-spacing: 0.08em;
}

.btn-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-primary, .btn-outline {
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  letter-spacing: 0.1em;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #2C2A29;
  color: #fff;
  border: 1px solid #2C2A29;
}
.btn-primary:hover { background: #8A7352; border-color: #8A7352; transform: translateY(-3px); }

.btn-outline {
  background: transparent;
  color: #2C2A29;
  border: 1px solid #2C2A29;
}
.btn-outline:hover { background: #F0ECE1; transform: translateY(-3px); }

/* 下方特色區塊排版 */
.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding: 0 2rem;
}

.feature {
  text-align: center;
}

.feature h3 {
  color: #8A7352;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.feature p {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* 進場動畫設定 */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }
.delay-5 { animation-delay: 1.0s; }
.delay-6 { animation-delay: 1.2s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .title { font-size: 3rem; }
  .btn-group { flex-direction: column; gap: 1rem; }
}
</style>