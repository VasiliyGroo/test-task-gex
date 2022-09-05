<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="grid justify-items-center">
          <div class="justify-self-center text-gray-900 text-2xl font-bold">
            <router-link to="/">://</router-link>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Авторизация
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Нет аккаунта?
          {{ " " }}
          <router-link
            to="/registration"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Зарегистрироваться
          </router-link>
        </p>
      </div>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="username" class="sr-only">Логин</label>
          <input
            id="username"
            name="username"
            type="text"
            v-model="username"
            autocomplete="username"
            required=""
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-t-md
              focus:outline-none
              focus:ring-indigo-500
              focus:border-indigo-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Логин"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            v-model="password"
            autocomplete="current-password"
            required=""
            class="
              appearance-none
              rounded-none
              relative
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-b-md
              focus:outline-none
              focus:ring-indigo-500
              focus:border-indigo-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Пароль"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          v-on:click="login"
          class="
            group
            relative
            w-full
            flex
            justify-center
            py-2
            px-4
            border border-transparent
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Войти
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { LockClosedIcon } from "@heroicons/vue/solid";

export default {
  name: "LogIn",
  components: {
    LockClosedIcon,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await axios({
        url: `http://79.143.31.216/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `grant_type=&username=${this.username}&password=${this.password}&scope=&client_id=&client_secret=`,
      })
        .then((result) => {
          if (
            result.status >= 200 ||
            (result.status < 300 && result.data.length > 0)
          ) {
            localStorage.setItem("user-info", JSON.stringify(result.data));
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 400) {
              swal("Oops!", `Логин и пароль не совпадают!`, "error");
              document.getElementById("username").value = "";
              document.getElementById("password").value = "";
            }
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
          }
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>