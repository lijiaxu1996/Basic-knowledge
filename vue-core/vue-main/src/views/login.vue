<template>
  <div>
    	<div class="lowin">
		<div class="lowin-brand">
			<img src="../assets/logo.png" alt="logo">
		</div>
		<div class="lowin-wrapper">
			<div class="lowin-box lowin-login">
				<div class="lowin-box-inner">
					<form>
						<p>vue-admin 登录</p>
						<div class="lowin-group">
							<label>邮件 <a href="#" class="login-back-link">登录?</a></label>
							<input type="email" autocomplete="email" name="email" class="lowin-input">
						</div>
						<div class="lowin-group password-group">
							<label>密码 <a href="#" class="forgot-link">忘记密码?</a></label>
							<input type="password" name="password" autocomplete="current-password" class="lowin-input">
						</div>
						<button class="lowin-btn login-btn">
							登录
						</button>

						<div class="text-foot">
							还没有账户? <a href="" class="register-link">注册</a>
						</div>
					</form>
				</div>
			</div>

			<div class="lowin-box lowin-register">
				<div class="lowin-box-inner">
					<form>
						<p>欢迎注册vue-admin账户</p>
						<div class="lowin-group">
							<label>用户名</label>
							<input type="text" name="name" autocomplete="name" class="lowin-input">
						</div>
						<div class="lowin-group">
							<label>邮箱</label>
							<input type="email" autocomplete="email" name="email" class="lowin-input">
						</div>
						<div class="lowin-group">
							<label>密码</label>
							<input type="password" name="password" autocomplete="current-password" class="lowin-input">
						</div>
						<button class="lowin-btn">
							注册
						</button>

						<div class="text-foot">
							已经有账户了？ <a href="" class="login-link">登录</a>
						</div>
					</form>
				</div>
			</div>
		</div>
      <!-- <footer class="lowin-footer">
			vue-admin 版权所有
		</footer> -->
	</div>

  </div>
</template>
<script>

export default {
  name:'login'
}
</script>
