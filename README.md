# Vee Validate for Laravel backend validation
Extension of vee-validate to support Laravel backend validation

### Getting Started

In your script entry point:

```javascript
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VeeValidateLaravel from 'vee-validate-laravel';

Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);

```

In Vue classes:

```javascript

axios.post('/example', data).then(res => {
}).catch(err => {
    this.$setLaravelValidationErrorsFromResponse(err.response.data);
});

```
