<template>
  <NuxtLayout name="authentication">
    <div class="page-header min-vh-100"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reset-basic.jpg');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7">
            <div class="card z-index-0 mb-7">
              <div class="card-header text-center pt-4 pb-1">
                <h4 class="font-weight-bolder mb-1">Reset password</h4>
                <p class="mb-0">
                  You will receive an e-mail in maximum 60 seconds
                </p>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="handleRecover">
                  <ArgonInput id="email" type="email" placeholder="Email" aria-label="Email" v-model="formData.email" />
                  <div class="text-center">
                    <ArgonButton color="dark" variant="gradient" class="my-4 mb-2" full-width>
                      Send
                    </ArgonButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <FooterCentered />
    </template>
  </NuxtLayout>
</template>

<script setup>
import FooterCentered from "@/examples/Footer/Centered.vue";
import { reactive } from "vue";
import axios from 'axios';
import useToast from "~~/composables/useToast";

definePageMeta({
  layout: false,
  middleware: ["guest"],
});

const formData = reactive({
  email: ''
});

const handleRecover = async () => {
  try {
    const response = await axios.post(`${process.env.API_BASE_URL}/password/email`, formData);
    useToast('success', response.data.message);
  } catch (error) {
    useToast('error', error.response.data.message || error.message);
  }
}
</script>
