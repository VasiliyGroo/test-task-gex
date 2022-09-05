<template>
  <div class="flex flex-col h-screen">
    <div>
      <HeaderNav />
    </div>
    <div class="flex-grow">
      <Loader :loading="showLoader" />
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Сервис сокращения ссылок
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Вставьте вашу ссылку в форму и нажимте кнопку "Сократить".
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        v-on:submit="short"
                        v-model="squeeze"
                        name="url"
                        id="url"
                        class="
                          block
                          w-full
                          flex-1
                          rounded-md
                          border-gray-300
                          focus:border-indigo-500 focus:ring-indigo-500
                          sm:text-sm
                        "
                        placeholder="Введите ссылку"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    v-on:click="short"
                    class="
                      inline-flex
                      justify-center
                      rounded-md
                      border border-transparent
                      bg-indigo-600
                      py-2
                      px-4
                      text-sm
                      font-medium
                      text-white
                      shadow-sm
                      hover:bg-indigo-700
                    "
                  >
                    Сократить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium pb-8 leading-6 text-gray-900">
              Статистика по созданным ссылкам
            </h3>
          </div>
        </div>
        <div class="not-prose relative bg-slate-50 rounded-xl">
          <div>
            <table class="border-collapse table-fixed w-full text-sm">
              <thead>
                <tr>
                  <th class="font-medium p-4 text-left border-b text-slate-600">
                    ID
                  </th>
                  <th
                    class="
                      font-medium
                      p-4
                      pr-2
                      pt-4
                      pb-3
                      text-left
                      border-b
                      text-slate-600
                    "
                  >
                    Короткая ссылка
                    <div class="block">
                      <button @click="sortColumn('order=asc_short&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                          />
                        </svg>
                      </button>
                      <button @click="sortColumn('order=desc_short&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th
                    class="
                      font-medium
                      p-4
                      pr-2
                      pt-4
                      pb-3
                      text-left
                      border-b
                      text-slate-600
                    "
                  >
                    Исходная ссылка
                    <div class="block">
                      <button @click="sortColumn('order=asc_target&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                          />
                        </svg>
                      </button>
                      <button @click="sortColumn('order=desc_target&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th
                    class="
                      font-medium
                      p-4
                      pr-2
                      pt-4
                      pb-3
                      text-left
                      border-b
                      text-slate-600
                    "
                  >
                    Количество переходов по короткой ссылке
                    <div class="block">
                      <button @click="sortColumn('order=asc_counter&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                          />
                        </svg>
                      </button>
                      <button @click="sortColumn('order=desc_counter&')">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="statistic in statistics"
                  :key="statistic.id"
                  class="statistic"
                >
                  <td
                    class="
                      border-b
                      p-4
                      break-all
                      pl-4
                      border-slate-100
                      text-slate-500
                    "
                  >
                    {{ statistic.id }}
                  </td>
                  <td
                    class="
                      border-b
                      p-4
                      break-all
                      pl-4
                      border-slate-100
                      text-slate-500
                    "
                  >
                    <button
                      id="item-to-copy-{{statistic.id}}"
                      @click="
                        copyToClipboard(
                          `http://79.143.31.216/s/${statistic.short}`
                        )
                      "
                    >
                      http://79.143.31.216/s/{{ statistic.short }}
                    </button>
                  </td>
                  <td
                    class="
                      border-b
                      p-4
                      break-all
                      pl-4
                      border-slate-100
                      text-slate-500
                    "
                  >
                    {{ statistic.target }}
                  </td>
                  <td
                    class="
                      border-b
                      break-all
                      p-4
                      pl-4
                      border-slate-100
                      text-slate-500
                    "
                  >
                    {{ statistic.counter }}
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              class="
                px-4
                py-3
                flex
                items-center
                justify-between
                border-t border-gray-200
                sm:px-6
              "
              aria-label="Pagination"
            >
              <div class="hidden sm:block">
                <div class="text-sm text-gray-700">
                  <ul class="px-4 py-3 flex items-center justify-between">
                    <li class="px-4 py-3 flex items-center justify-between">
                      <div class="pr-2">Фильтр:</div>
                      <div>
                        <select
                          @change="onChangeRecordsPerPage"
                          v-model="perPage"
                          class="
                            mt-1
                            block
                            w-full
                            pl-3
                            pr-10
                            py-2
                            text-base
                            border-gray-300
                            focus:outline-none
                            focus:ring-indigo-500
                            focus:border-indigo-500
                            sm:text-sm
                            rounded-md
                          "
                        >
                          <option :value="Number(5)">5</option>
                          <option :value="Number(10)">10</option>
                          <option :value="Number(15)">15</option>
                          <option :value="Number(20)">20</option>
                          <option :value="Number(30)">30</option>
                          <option :value="Number(40)">40</option>
                          <option :value="Number(50)">50</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex-1 flex justify-between sm:justify-end">
                <Paginate
                  :totalPages="this.totalPages"
                  :perPage="this.perPage"
                  :currentPage="currentPage"
                  @pagechanged="onPageChange"
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div><Footer /></div>
  </div>
</template>
  
<script>
import axios from "axios";
import HeaderNav from "../components/HeaderNav.vue";
import Footer from "../components/Footer.vue";
import Paginate from "../components/Paginate.vue";
import Loader from "../components/Loader.vue";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/vue/solid";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "/node_modules/@headlessui/vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    Footer,
    Loader,
    Paginate,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },

  data() {
    return {
      showLoader: false,
      squeeze: "", // Переменная для главной функции сокращения ссылки
      statistics: [], // Переменная для динамического добавления значений остортированных данных
      takeTurns: 1, // Переменная для функции сортировки
      sort: "order=asc_target&",
      currentPage: 1,
      page: 1,
      listItems: [],
      totalPages: 0,
      offset: 0,
      perPage: 10,
    };
  },

  methods: {
    /* START --> Главная функция сокращения ссылок (POST запрос) */
    async short() {
      await axios({
        method: "POST",
        url: `http://79.143.31.216/squeeze?link=${this.squeeze}`,
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user-info"))["access_token"],
        },
      });
      document.getElementById("url").value = "";
      window.location.reload();
    },
    /* END --> Главная функция сокращения ссылок (POST запрос) */

    /* START --> Функция сортировка столбца*/
    async sortColumn(sort) {
      if (this.takeTurns == 1) {
        this.sort = sort;
        this.viewStatistic();
      }
    },
    /* END --> Функция сортировка столбца */

    /* START --> Функция получения данных по статистике */
    async viewStatistic() {
      this.showLoader = true;
      await axios({
        method: "GET",
        url: `http://79.143.31.216/statistics?${this.sort}offset=${this.offset}&limit=${this.perPage}`,
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user-info"))["access_token"],
        },
      }).then((response) => {
        this.showLoader = false;
        this.statistics = response.data;
      });
    },
    /* END --> Функция получения данных по статистике */

    onChangeRecordsPerPage() {
      this.viewStatistic();
    },

    onPageChange(page) {
      this.currentPage = page;
      this.offset = this.perPage * this.currentPage - this.perPage;
      this.viewStatistic();
    },

    async getAllLinks() {
      let allLinkLength = await axios({
        method: "GET",
        url: `http://79.143.31.216/statistics?offset=0&limit=0`,
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user-info"))["access_token"],
        },
      });
      this.listItems = allLinkLength.data;
      this.totalPages = Math.ceil(this.listItems.length / this.perPage);
    },

    /* START --> Копирование текста по клику в буфер обмена */
    copyToClipboard(text) {
      let selected = false;
      let el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      if (document.getSelection().rangeCount > 0) {
        selected = document.getSelection().getRangeAt(0);
      }
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    /* END --> Копирование текста по клику в буфер обмена */
  },

  /* START --> Вызов функций сортировки */
  async created() {
    this.viewStatistic();
  },
  /* END --> Вызов функций сортировки */

  /* START --> Lifesycle hook -> mounted */
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Registration" });
    }
    this.getAllLinks();
  },

  /* END --> Lifesycle hook -> mounted */
};
</script>