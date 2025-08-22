<template>
  <div
    class="bg-[var(--surface-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--border-color)]"
  >
    <div class="p-6">
      <!-- Header Card -->
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-lg font-semibold">
            {{ transaction.note || "Transaksi" }}
          </h3>
          <p class="text-sm">
            {{ formatDate(transaction.dateFormatted) }} {{ transaction.timeFormatted || "" }}
          </p>
        </div>
        <div class="flex items-center">
          <span
            :class="[
              'px-3 py-1 rounded-full text-xs font-medium',
              getTypeClass(transaction.type),
            ]"
          >
            {{ getTypeText(transaction.type) }}
          </span>
        </div>
      </div>

      <!-- Transaction Details -->
      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-sm">Jumlah:</span>
          <span
            class="text-lg font-bold"
            :class="getAmountClass(transaction.type)"
          >
            {{ formatCurrency(transaction.amount) }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-sm">Kategori:</span>
          <span class="text-sm font-medium">{{
            getCategoryText(transaction.category)
          }}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div
        class="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-100"
      >
        <button
          class="px-3 py-1 text-sm text-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] rounded-md transition-colors"
          @click="$emit('edit', transaction)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"
            />
          </svg>
        </button>
        <button
          class="px-3 py-1 text-sm text-[var(--danger-color)] hover:text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] rounded-md transition-colors"
          @click="$emit('delete', transaction)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transaction: {
    type: Object,
    required: true,
  },
});

defineEmits(["edit", "delete"]);

const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatCurrency = (amount) => {
  if (!amount) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const getTypeClass = (type) => {
  const typeClasses = {
    income: "bg-green-100 text-green-800",
    expense: "bg-red-100 text-red-800",
  };
  return typeClasses[type] || "bg-gray-100 ";
};

const getTypeText = (type) => {
  const typeTexts = {
    income: "Pemasukan",
    expense: "Pengeluaran",
  };
  return typeTexts[type] || "Tidak Diketahui";
};

const getAmountClass = (type) => {
  return type === "income"
    ? "text-[var(--success-color)]"
    : "text-[var(--danger-color)]";
};

const getCategoryText = (category) => {
  const categoryMap = {
    salary: "Gaji",
    bonus: "Bonus",
    investment: "Investasi",
    food: "Makanan & Minuman",
    transport: "Transportasi",
    shopping: "Belanja",
    bills: "Tagihan",
    entertainment: "Hiburan",
    health: "Kesehatan",
    other: "Lainnya",
  };
  return categoryMap[category] || category;
};
</script>
