module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'__log': false
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
  'plugins': [
    'prettier'
  ],
	'rules': {
    'prettier/prettier': 'error',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single',
			{ 'avoidEscape': true }
		],
		'semi': [
			'error',
			'never'
		]
	}
}
