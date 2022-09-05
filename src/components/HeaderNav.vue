<template>
  <header class="bg-slate-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-none">
        <div class="flex items-center">
          <router-link to="/">
            <span class="sr-only">ShortURL</span>
            <div class="text-gray-900 text-2xl font-bold">://</div>
          </router-link>
        </div>
        <div class="ml-10 space-x-4">
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="
                  bg-white
                  p-1
                  rounded-full
                  flex
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <span class="sr-only">Откройте меню пользователя</span>
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-auto
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <button
                    v-on:click="logout"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    Выход
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
export default {
  name: "HeaderNav",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>

  
