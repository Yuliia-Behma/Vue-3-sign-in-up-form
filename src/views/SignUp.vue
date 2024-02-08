<template>
   <div class="wraper up">
        <div class="form-header">
          <h3>Sign up</h3>
        </div>
        <div class="form-container">
          <form>
            <div class="input-container">
              <label for="input-name">Name</label>
              <input
                type="text"
                id="input-name"
                class="input-field"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div class="input-container">
              <label for="input-email">E-mail</label>
              <input
                type="email"
                id="input-email"
                class="input-field"
                placeholder="user@sample.com"
                required
              />
            </div>
            <div class="input-container">
              <label for="input-password">Password</label>
              <input
                type="password"
                id="input-password"
                class="input-field"
                required
              />
            </div>
            <div class="input-container">
              <label for="confirm-password">Confirm password</label>
              <input
                type="password"
                id="confirm-password"
                class="input-field"
                required
              />
            </div>
            <div class="remember-forgot">
              <div class="remember-me">
                <input type="checkbox" id="agree" required />
                <label for="agree"
                  >I agree to the Terms of Use and Privacy Notice</label
                >
              </div>
            </div>
            <div class="input-container">
              <input type="submit" class="input-submit" value="Sign up" />
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
export default {
  name: 'SignUp',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
