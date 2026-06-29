<template>
  <div class="booking-container">
    <div class="form-header">
      <h2>預訂甜點</h2>
      <p>請選擇您心儀的甜點與取餐時間，我們將為您新鮮保留。</p>
    </div>

    <form @submit.prevent="handleSubmit" class="booking-form">
      <div class="section-box">
        <h4>1. 取餐人資訊</h4>
        <div class="input-grid">
          <div class="field">
            <label>貴姓大名 *</label>
            <input v-model="form.name" type="text" required placeholder="例如：林小華" />
          </div>
          <div class="field">
            <label>手機號碼 *</label>
            <input v-model="form.phone" type="tel" required placeholder="09xx-xxxxxx" />
          </div>
          <div class="field">
            <label>預計取餐日期 *</label>
            <input v-model="form.date" type="date" :min="minDate" required />
          </div>
          <div class="field">
            <label>取餐時段</label>
            <select v-model="form.time">
              <option>14:00 - 15:30 (午茶剛出爐)</option>
              <option>16:00 - 17:30</option>
              <option>18:30 - 20:00 (傍晚取餐)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="section-box">
        <h4>2. 選擇品項與數量</h4>
        <div class="order-list">
          <div v-for="d in desserts" :key="d.id" class="order-item">
            <span class="item-name">{{ d.name }} <small>(${{ d.price }})</small></span>
            <div class="counter">
              <button type="button" @click="updateQty(d.id, -1)">-</button>
              <input type="number" readonly :value="form.orders[d.id] || 0" />
              <button type="button" @click="updateQty(d.id, 1)">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="submit-area">
        <div class="total-display">
          <span>總計金額：</span>
          <strong>NT$ {{ totalPrice }}</strong>
        </div>
        <button type="submit" class="submit-btn" :disabled="totalPrice === 0">
          確認送出預訂單
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, watch } from 'vue';

const props = defineProps({
  desserts: Array,
  targetId: Number // 從菜單頁點選傳進來的預設甜點
});

const emit = defineEmits(['order-success']);

const minDate = new Date().toISOString().split('T')[0];

const form = reactive({
  name: '',
  phone: '',
  date: minDate,
  time: '14:00 - 15:30 (午茶剛出爐)',
  orders: {} // 格式範例：{ 1: 2, 4: 1 } (甜點ID: 數量)
});

// 若有指定目標，預設選 1 個
const applyTarget = (id) => {
  if (id) form.orders[id] = (form.orders[id] || 0) + 1;
};

onMounted(() => applyTarget(props.targetId));
watch(() => props.targetId, (newId) => applyTarget(newId));

const updateQty = (id, change) => {
  const current = form.orders[id] || 0;
  const next = current + change;
  if (next > 0) form.orders[id] = next;
  else delete form.orders[id];
};

const totalPrice = computed(() => {
  let sum = 0;
  for (const [id, qty] of Object.entries(form.orders)) {
    const item = props.desserts.find(d => d.id === Number(id));
    if (item) sum += item.price * qty;
  }
  return sum;
});

const handleSubmit = () => {
  alert(`【預訂成功！】\n感謝 ${form.name} 的預訂，我們已為您安排製作。\n取餐代碼：#${Math.floor(1000 + Math.random() * 9000)}`);
  form.orders = {};
  emit('order-success');
};
</script>

<style scoped>
.booking-container {
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid #EAE5D9;
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-header h2 {
  font-size: 1.8rem;
  color: #2C2A29;
  margin: 0 0 0.5rem 0;
}

.form-header p {
  color: #777;
  font-size: 0.95rem;
}

.section-box {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed #DDD;
}

h4 {
  color: #B89047;
  margin: 0 0 1.2rem 0;
  font-size: 1.1rem;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

@media (max-width: 500px) {
  .input-grid { grid-template-columns: 1fr; } /* 手機版表單自動轉為單排 */
}

.field {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #444;
}

input, select {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  box-sizing: border-box;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
}

.item-name { font-weight: 500; }
.item-name small { color: #888; }

.counter {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.counter button {
  width: 32px;
  height: 32px;
  background: #f4f4f4;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
}

.counter input {
  width: 40px;
  text-align: center;
  border: none;
  padding: 0;
  font-weight: bold;
}

.submit-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.total-display { font-size: 1.2rem; }
.total-display strong { color: #e17055; font-size: 1.5rem;}

.submit-btn {
  padding: 1rem 2.5rem;
  background-color: #B89047;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>