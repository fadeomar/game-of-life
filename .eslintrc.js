module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "prettier","prettier/react"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            'impliedStrict': true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "prettier/prettier": "error",
        'react/state-in-constructor': 0,
        "react/jsx-filename-extension": [
            1,
            {
              'extensions': [
                '.js',
                '.jsx'
              ]
            }
          ],
    }
};