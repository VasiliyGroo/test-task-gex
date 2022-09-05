<template>
  <ul
    class="isolate inline-flex -space-x-px rounded-md shadow-sm"
    aria-label="Pagination"
  >
    <li class="pagination-item">
      <button
        type="button"
        class="
          relative
          inline-flex
          items-center
          rounded-l-md
          border border-gray-300
          bg-white
          px-2
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        Первая
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        class="
          relative
          inline-flex
          items-center
          border border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <span class="sr-only">Назад</span>
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" class="pagination-item" :key="page.name">
      <button
        type="button"
        class="
          relative
          inline-flex
          items-center
          border border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
        type="button"
        class="
          relative
          inline-flex
          items-center
          border border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        <span class="sr-only">Вперед</span>
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        class="
          relative
          inline-flex
          items-center
          rounded-r-md
          border border-gray-300
          bg-white
          px-2
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Последняя
      </button>
    </li>
  </ul>
</template>
  
  <script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style>
.active {
  position: "relative";
  z-index: 10;
  display: inline-flex;
  align-items: center;
  border-width: 1px;
  border-color: rgb(99 102 241);
  background-color: rgb(238 242 255);
  font-weight: 500;
  color: rgb(79 70 229);
}
.active:focus {
  z-index: 20;
}
</style>
