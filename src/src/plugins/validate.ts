import { configure, extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { confirmed, email, max, min, min_value, required } from 'vee-validate/dist/rules';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

const createValidate = (i18n: VueI18n) => {
  configure({
    defaultMessage: (_, values) => {
      if (!values) { return ''; }
      return i18n.t(`validations.${values._rule_}`, values).toString();
    },
  });

  extend('confirmed', confirmed);
  extend('email', email);
  extend('min', min);
  extend('max', max);
  extend('min_value', min_value);
  extend('required', required);

  extend('requiredId', {
    validate(value) {
      return {
        required: true,
        valid: !!value && !!value.id,
      };
    },
    message: (_, values) => {
      if (!values) { return ''; }
      return i18n.t('validations.required', values).toString();
    },
    computesRequired: true,
  });

  const webimgExtensions = ['webp'];

  extend('file_extension_webimg', {
    validate(value) {
      const regex = new RegExp('.(' + webimgExtensions.join('|') + ')$', 'i');
      return {
        valid: !!value && regex.test(value),
      };
    },
    message: (_, values) => {
      if (!values) { return ''; }
      return i18n.t('validations.file_extension', { extensions: webimgExtensions }).toString();
    },
  });
};

export { createValidate };
