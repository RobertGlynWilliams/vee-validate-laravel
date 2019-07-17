# Vee Validate for Laravel backend validation
Simple vue js plugin that makes it easier to show validation errors from Laravel validation by using vee-validate.

### Getting Started

In your script entry point:

```javascript
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VeeValidateLaravel from 'vee-validate-laravel';

Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);

```

From Laravel:

```php

$request->validate([
    'name' => 'required|min:3|max:255'
]);


```


In Vue classes:


```vue

<template>
    <div class="form-group" v-bind:class="{'has-error' : errors.has('name')}">
        <label for="name">Name</label>
        <input 
            type="text" 
            name="name"
            class="form-control"
            v-model="name"
            v-validate="'required'" />
        <div v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</div>
    </div>
</template>

<script>
    export default {
        methods: {
            doValidation() {
                const data = {
                    name: this.name
                };
            
                axios.post('/example', data).then(res => {
                }).catch(err => {
                    this.$setLaravelValidationErrorsFromResponse({ errors: err.response.data });
                });
            }
        }
    }
</script>

```

