<!-- eslint-disable vue/html-self-closing -->
<template>
  <!-- Modal Overlay -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <!-- Modal Content -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div
          v-show="isOpen"
          class="bg-[var(--surface-color)] rounded-lg shadow-xl w-full max-w-md transform"
          @click.stop
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between p-6 border-b border-[var(--border-color)]"
          >
            <h3 class="text-lg font-semibold">
              {{ isEditing ? "Edit Transaksi" : "Tambah Transaksi" }}
            </h3>
            <button
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              @click="closeModal"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-4">
            <!-- Tipe Transaksi -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Tipe Transaksi
              </label>
              <div class="grid grid-cols-2 gap-3">
                <label
                  class="flex items-center p-3 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <input
                    v-model="form.type"
                    type="radio"
                    value="income"
                    class="mr-2 text-blue-600 focus:ring-[var(--primary-color)]"
                  />
                  <span class="text-sm text-gray-700 dark:text-gray-300"
                    >Pemasukan</span
                  >
                </label>
                <label
                  class="flex items-center p-3 border border-[var(--border-color)] rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <input
                    v-model="form.type"
                    type="radio"
                    value="expense"
                    class="mr-2 text-blue-600 focus:ring-[var(--primary-color)]"
                  />
                  <span class="text-sm text-gray-700 dark:text-gray-300"
                    >Pengeluaran</span
                  >
                </label>
              </div>
            </div>

            <!-- Kategori -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Kategori
              </label>
              <select
                v-model="form.category"
                class="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
              >
                <option value="">Pilih kategori</option>
                <option
                  v-for="option in categoryOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>

            <!-- Jumlah -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Jumlah
              </label>
              <div class="relative">
                <span class="absolute left-3 top-2 text-gray-500">Rp</span>
                <input
                  v-model="form.amount"
                  type="number"
                  placeholder="Masukkan jumlah"
                  class="w-full pl-10 pr-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                />
              </div>
            </div>

            <!-- Deskripsi -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Deskripsi
              </label>
              <textarea
                v-model="form.note"
                placeholder="Masukkan deskripsi transaksi"
                rows="3"
                class="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none transition-colors duration-200"
              />
            </div>

            <!-- Tanggal & Jam -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Tanggal & Jam
              </label>
              <input
                v-model="form.date"
                type="datetime-local"
                class="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
              />
            </div>
          </div>

          <!-- Footer -->
          <div
            class="flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700"
          >
            <button
              class="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
              @click="closeModal"
            >
              Batal
            </button>
            <button
              :disabled="!isFormValid || isSubmitting"
              class="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 flex items-center"
              @click="handleSubmit"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {{
                isSubmitting
                  ? "Menyimpan..."
                  : isEditing
                  ? "Update Transaksi"
                  : "Simpan Transaksi"
              }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { apiFetch } from "@/utils/api";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  transaction: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits([
  "update:modelValue",
  "transaction-added",
  "transaction-updated",
]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const isSubmitting = ref(false);

// Check if we're editing an existing transaction
const isEditing = ref(false);

const toDatetimeLocalString = (date = new Date()) => {
  const pad = (n) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const form = ref({
  _id: "",
  type: "expense",
  category: "",
  amount: "",
  note: "",
  date: toDatetimeLocalString(new Date()),
});

const categoryOptions = computed(() => {
  if (form.value.type === "income") {
    return [
      { label: "Gaji", value: "salary" },
      { label: "Bonus", value: "bonus" },
      { label: "Investasi", value: "investment" },
      { label: "Lainnya", value: "other" },
    ];
  } else {
    return [
      { label: "Makanan & Minuman", value: "food" },
      { label: "Transportasi", value: "transport" },
      { label: "Belanja", value: "shopping" },
      { label: "Tagihan", value: "bills" },
      { label: "Hiburan", value: "entertainment" },
      { label: "Kesehatan", value: "health" },
      { label: "Lainnya", value: "other" },
    ];
  }
});

const isFormValid = computed(() => {
  return (
    form.value.type &&
    form.value.category &&
    form.value.amount &&
    form.value.amount > 0 &&
    form.value.date
  );
});

const closeModal = () => {
  isOpen.value = false;
  resetForm();
};

const resetForm = () => {
  form.value = {
    type: "expense",
    category: "",
    amount: "",
    note: "",
    date: toDatetimeLocalString(new Date()),
  };
};

const initializeFormWithTransaction = (transaction) => {
  if (transaction) {
    form.value = {
      _id: transaction._id || "",
      type: transaction.type || "expense",
      category: transaction.category || "",
      amount: transaction.amount?.toString() || "",
      note: transaction.note || transaction.desc || "",
      date: transaction.date
        ? toDatetimeLocalString(new Date(transaction.date))
        : toDatetimeLocalString(new Date()),
    };
    isEditing.value = true;
  }
};

const handleSubmit = async () => {
  if (!isFormValid.value) return;

  isSubmitting.value = true;

  try {
    // Convert date string to epoch timestamp
    const payload = {
      ...form.value,
      amount: parseFloat(form.value.amount),
      date: new Date(form.value.date).getTime(), // convert to epoch
    };

    if (isEditing.value) {
      // Update existing transaction
      await apiFetch(`/transaction/update/${props.transaction._id}`, {
        method: "PUT",
        body: payload,
      });

      emit("transaction-updated", { ...props.transaction, ...payload });

      useToast().add({
        title: "Berhasil!",
        description: "Transaksi berhasil diperbarui",
        color: "green",
      });
    } else {
      // Create new transaction
      await apiFetch("/transaction/create", {
        method: "POST",
        body: payload,
      });

      emit("transaction-added");

      useToast().add({
        title: "Berhasil!",
        description: "Transaksi berhasil ditambahkan",
        color: "green",
      });
    }

    closeModal();
  } catch (err) {
    useToast().add({
      title: "Gagal!",
      description: isEditing.value
        ? "Terjadi kesalahan saat memperbarui transaksi"
        : "Terjadi kesalahan saat menambahkan transaksi",
      color: "red",
    });
    console.error("Submit error", err);
  } finally {
    isSubmitting.value = false;
  }
};

// Watch for modal open and transaction prop changes
watch(
  [isOpen, () => props.transaction],
  ([newIsOpen, newTransaction]) => {
    if (newIsOpen) {
      if (newTransaction) {
        // Initialize form with transaction data for editing
        initializeFormWithTransaction(newTransaction);
      } else {
        // Reset form for new transaction
        resetForm();
      }
    }
  },
  { immediate: true }
);
</script>
