<template>
   <div class="wraper in">
        <div class="form-header">
          <h3>Sign in</h3>
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
            <div class="remember-forgot">
              <div class="remember-me">
                <input type="checkbox" id="remember-check" />
                <label for="remember-check">Remember me</label>
              </div>
              <div class="forgot-password">
                <a href="#">Forgor password</a>
              </div>
            </div>
            <div class="input-container">
              <input type="submit" class="input-submit" value="Sign in" />
            </div>
            <div class="register">
              <span>Don't have an account yet?</span>
              <RouterLink to="/signup">Sign Up</RouterLink>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
export default {
  name: 'SignIn',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
