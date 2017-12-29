/**
* vee-validate-laravel v1.0.0
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VeeValidateLaravel = factory());
}(this, (function () { 'use strict';

var veeValidateLaravel = {
    install: function install(Vue, options) {
        Vue.prototype.$setLaravelValidationErrorsFromResponse = function(errorResponse) {
            var this$1 = this;

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

            var errorFields = Object.keys(errorResponse.errors);

            // insert laravel errors
            for (var i = 0; i < errorFields.length; i++) {
                var field = errorFields[i];

                var errorString = errorResponse.errors[field].join(', ');
                this$1.$validator.errors.add(field, errorString);
            }
        };

        if(options) {
            Vue.prototype.$laravelData = options;
        } else {
            Vue.prototype.$laravelData = {};
        }
    }
};

return veeValidateLaravel;

})));
