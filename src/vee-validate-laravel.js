export default {
    install(Vue, options) {
        Vue.prototype.$setLaravelValidationErrorsFromResponse = function(errorResponse) {
            // only allow this function to be run if the validator exists
            if (!this.hasOwnProperty('$validator')) {
                return;
            }

            // clear errors
            this.$validator.errors.clear();

            // check if errors exist
            if (!errorResponse.hasOwnProperty('errors')) {
                return;
            }

            let errorFields = Object.keys(errorResponse.errors);

            // insert laravel errors
            for (let i = 0; i < errorFields.length; i++) {
                let field = errorFields[i];

                let errorString = errorResponse.errors[field].join(', ');
                this.$validator.errors.add({ field: field, msg: errorString });
            }
        };

        Vue.prototype.$laravelData = {};
        if (options) {
            Vue.prototype.$laravelData = options;
        }
    }
};
