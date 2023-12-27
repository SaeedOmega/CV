<script>
export default {
  props: ["contacts"],
};
</script>

<template>
  <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'" class="w-full md:w-1/2">
    <div class="text-start max-w-xl px-6">
      <h2
        style="font-variation-settings: 'wght' 500"
        class="font-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
      >
        {{ $t("contact-details") }}
      </h2>
      <ul>
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <i
            :data-feather="contact.icon"
            class="w-5 text-gray-500 dark:text-gray-400 mx-5"
          ></i>
          <a
            href="#"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
            :class="
              contact.icon === 'mail' || contact.icon === 'phone'
                ? 'hover:underline cursor-pointer'
                : ''
            "
            aria-label="Website and Phone"
            dir="ltr"
          >
            {{ contact.name === "address" ? $t(contact.name) : contact.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
