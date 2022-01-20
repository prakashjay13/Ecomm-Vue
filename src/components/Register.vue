<template>
  <div class="" id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Registration</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstname">First Name:</label>
                <input
                  type="text"
                  v-model="user.firstname"
                  id="firstname"
                  name="firstname"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.firstname.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.firstname.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.firstname.required"
                    >First Name is required</span
                  >
                  <span v-if="!$v.user.firstname.alpha"
                    >First Name should contains only letters</span
                  >
                  <span v-if="!$v.user.firstname.minLength"
                    >First Name minimum legth should be atleast 2</span
                  >
                  <span v-if="!$v.user.firstname.maxLength"
                    >First Name maximum length should not be more than 10</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input
                  type="text"
                  v-model="user.lastname"
                  id="lastname"
                  name="lastname"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.lastname.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.lastname.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.lastname.required"
                    >Last Name is required</span
                  >
                  <span v-if="!$v.user.lastname.alpha"
                    >Last Name should contains only letters</span
                  >
                  <span v-if="!$v.user.lastname.minLength"
                    >Last Name minimum legth should be atleast 2</span
                  >
                  <span v-if="!$v.user.lastname.maxLength"
                    >Last Name maximum length should not be more than 10</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                />
                <div
                  v-if="submitted && $v.user.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.email.required">Email is required</span>
                  <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="user.password"
                  id="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.password.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.password.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.password.required"
                    >Password is required</span
                  >
                  <span v-if="!$v.user.password.minLength"
                    >Password must be at least 6 characters</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  v-model="user.confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.user.confirmPassword.$error,
                  }"
                />
                <div
                  v-if="submitted && $v.user.confirmPassword.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.confirmPassword.required"
                    >Confirm Password is required</span
                  >
                  <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
                    >Passwords must match</span
                  >
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  alpha,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import { userRegister } from "@/common/Service";
export default {
  name: "Register",

  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      firstname: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(10),
      },
      lastname: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(10),
      },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      let formData = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password,
      };

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
      console.log(formData);
      userRegister(formData)
        .then((res) => {
          if (res.data.err == 0) {
            this.$router.push("/login");
            console.log(this.formData);
            alert(res.data.msg);
          } else {
            alert("Something went wrong");
            console.log(res.data);
          }
        })
        .catch((err) => {
          alert("Something went wrong" + err);
          console.log("Something Wrong " + err);
        });
    },
  },
};
</script>
 
<style>
</style>
