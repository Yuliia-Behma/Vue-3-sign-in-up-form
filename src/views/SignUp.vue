<template>
  <div class="wraper up">
    <div class="form-header">
      <h3>Sign up</h3>
    </div>
    <div class="form-container">
      <form autocomplete="off" @submit="submitAlert">
        <div class="input-container">
          <label for="input-name">Name</label>
          <input
            autofocus
            type="text"
            id="input-name"
            class="input-field"
            placeholder="Enter your name..."
            v-model="v$.name.$model"
            @blur="v$.name.$touch"
            :class="{ 'is-invalid': v$.name.$error }"
          />
          <div v-if="v$.name.$error" class="error-div">Name is required</div>
        </div>
        <div class="input-container">
          <label for="input-email">E-mail</label>
          <input
            type="email"
            id="input-email"
            class="input-field"
            placeholder="user@sample.com"
            v-model="v$.email.$model"
            @blur="v$.email.$touch"
            :class="{ 'is-invalid': v$.email.$error }"
          />
          <div
            v-for="(error, errorIndex) in v$.email.$errors"
            :key="errorIndex"
            class="error-div"
          >
            {{ error.$message }}
          </div>
        </div>
        <div class="input-container">
          <label for="input-password">Password</label>
          <input
            type="password"
            id="input-password"
            class="input-field"
            v-model="v$.password.$model"
            @blur="v$.password.$touch"
            :class="{ 'is-invalid': v$.password.$error }"
          />
          <div
            v-for="(error, errorIndex) in v$.password.$errors"
            :key="errorIndex"
            class="error-div"
          >
            {{ error.$message }}
          </div>
        </div>
        <div class="input-container">
          <label for="confirm-password">Confirm password</label>
          <input
            type="password"
            id="confirm-password"
            class="input-field"
            v-model="v$.passwordConfirm.$model"
            @blur="v$.passwordConfirm.$touch"
            :class="{ 'is-invalid': v$.passwordConfirm.$error }"
          />
          <div v-if="v$.passwordConfirm.$error" class="error-div">
            Password must be equal
          </div>
        </div>
        <div class="remember-forgot">
          <div class="remember-me">
            <input
              type="checkbox"
              id="agree"
              v-model="agree"
              @click="v$.agree.$touch"
            />
            <label for="agree"
              >I agree to the Terms of Use and Privacy Notice</label
            >
          </div>
          <div v-if="v$.agree.$error" class="error-div">
            This field is required
          </div>
        </div>
        <div class="input-container">
          <input
            :disabled="v$.$invalid"
            type="submit"
            class="input-submit"
            value="Sign up"
          />
        </div>
        <div class="register">
          <span>Have an account already?</span>
          <RouterLink to="/">Sign In</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";

import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
  name: "SignUp",
  setup() {
    function submitAlert() {
      alert("Your form submited");
    }
    return { v$: useVuelidate(), submitAlert };
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      agree: false,
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      passwordConfirm: { sameAs: sameAs(this.password) },
      agree: { checked: (agree) => agree === true },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-div {
  font-size: 12px;
  font-weight: 600;
  color: rgb(200, 1, 1);
  padding-left: 20px;
  margin-top: 4px;
  text-shadow: 2px 2px 10px rgb(255, 255, 255),
    -2px -2px 10px rgb(255, 255, 255);
}
.remember-forgot {
  flex-direction: column;
  align-items: start;
}
.is-invalid {
  outline: 1px solid rgb(200, 1, 1);
}
</style>
