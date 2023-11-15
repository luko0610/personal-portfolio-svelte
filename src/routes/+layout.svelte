<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import { DarkMode } from "flowbite-svelte";
  import {
    EnvelopeSolid,
    LinkedinSolid,
    MailBoxSolid,
    ProfileCardOutline,
  } from "flowbite-svelte-icons";
</script>

<nav
  class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start rtl:justify-end">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <a href="logo" class="flex ms-2 md:me-24">
          <span
            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
            >Lukas Kohlmaier</span
          >
        </a>
      </div>
      <div class="flex items-center">
        <div class="flex items-center ms-3 space-x-4">
          <a
            href="/contact"
            class="flex font-rubik text-white text-lg pl-2 pr-2 bg-orange-600/75 rounded focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            Contact me
          </a>
          <!-- <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <DarkMode />
          </button> -->
          <a
            href="https://www.linkedin.com/in/lukas-k-366108122/"
            type="button"
            class="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <LinkedinSolid />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<aside
  id="logo-sidebar"
  class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
  aria-label="Sidebar"
>
  <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      <li>
        <a
          href="/about-me"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ProfileCardOutline />
          <span class="ms-3">About me</span>
        </a>
      </li>
      <!-- <li>
        <a
          href="/blog"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path
              d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
            />
          </svg>
          <span class="flex-1 ms-3 whitespace-nowrap">Blog</span>
        </a>
      </li> -->
      <li />
      <li>
        <a
          href="/projects"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <MailBoxSolid />
          <span class="flex-1 ms-3 whitespace-nowrap">Projects</span>
        </a>
      </li>
      <li>
        <a
          href="/contact"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <EnvelopeSolid />
          <span class="flex-1 ms-3 whitespace-nowrap">Contact</span>
        </a>
      </li>
    </ul>
  </div>
</aside>

<div class="p-4 sm:ml-64">
  <div
    class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"
  >
    <slot />
  </div>
</div>

<footer class="p-4 font-rubik">
  <div class="container mx-auto text-center">
    <p class="text-sm">&copy; 2023 Lukas Kohlmaier. All rights reserved.</p>
    <p class="text-sm">Built with Svelte and Tailwind CSS</p>
  </div>
</footer>
