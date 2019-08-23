'use strict';

module.exports = {
	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		complexity: 'off',
		'consistent-return': 'error',
		curly: 'error',
		'default-case': 'error',
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': [
			'error',
			{
				allowPattern: '^[a-z]+(_[a-z]+)+$',
			},
		],
		eqeqeq: 'error',
		'function-call-argument-newline': ['error', 'consistent'],
		'guard-for-in': 'off',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': [
			'error',
			{
				allowLoop: true,
				allowSwitch: true,
			},
		],
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-misleading-character-class': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': [
			'error',
			{
				object: '_',
				message: 'Please import lodash methods individually using per method packages: https://www.npmjs.com/browse/keyword/lodash-modularized',
			},
		],
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-named-capture-group': 'off',
		radix: 'error',
		'require-atomic-updates': 'error',
		'require-await': 'off',
		'require-unicode-regexp': 'error',
		'vars-on-top': 'error',
		'wrap-iife': 'error',
		yoda: 'off',
	},
};
