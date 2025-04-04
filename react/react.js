import reactPlugin from 'eslint-plugin-react';
import { rules as baseStyleRules } from '../base/style.js';
import { allSxFiles } from '../lib/files.js';

const files = allSxFiles;

const dangleRules = baseStyleRules['no-underscore-dangle'];

const rules = {

  'no-underscore-dangle': [dangleRules[0], {
    ...dangleRules[1],
    allow: dangleRules[1].allow.concat(['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']),
  }],

  'class-methods-use-this': ['error', {
    exceptMethods: [
      'render',
      'getInitialState',
      'getDefaultProps',
      'getChildContext',
      'componentWillMount',
      'UNSAFE_componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'UNSAFE_componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'UNSAFE_componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'componentDidCatch',
      'getSnapshotBeforeUpdate',
    ],
  }],

  // Prevent missing displayName in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': ['off', { ignoreTranspilerName: false }],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': ['error', {
    forbid: ['any', 'array', 'object'],
    checkContextTypes: true,
    checkChildContextTypes: true,
  }],

  // Forbid certain props on DOM Nodes
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': ['off', { forbid: [] }],

  // Enforce boolean attributes notation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],

  // Enforce event handler naming conventions in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': ['off', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
  }],

  // Validate JSX has key prop when in array or iterator
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  // Turned off because it has too many false positives
  'react/jsx-key': 'off',

  // Prevent usage of .bind() in JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': ['error', {
    ignoreRefs: true,
    allowArrowFunctions: true,
    allowFunctions: false,
    allowBind: false,
    ignoreDOMComponents: true,
  }],

  // Prevent duplicate props in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  // Prevent usage of unwrapped JSX strings
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': ['off', { noStrings: true }],

  // Disallow undeclared variables in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': ['error', {
    allowAllCaps: true,
    ignore: [],
  }],

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': ['off', {
    ignoreCase: true,
    callbacksLast: false,
    requiredFirst: false,
    sortShapeProp: true,
  }],

  // Deprecated in favor of react/jsx-sort-props
  'react/jsx-sort-prop-types': 'off',

  // Enforce defaultProps declarations alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
  'react/jsx-sort-default-props': ['off', {
    ignoreCase: true,
  }],

  // Prevent React to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': ['error'],

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',

  // Prevent usage of dangerous JSX properties
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'warn',

  // Prevent usage of deprecated methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': ['error'],

  // Prevent usage of setState in componentDidMount
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // this is necessary for server-rendering
  'react/no-did-mount-set-state': 'off',

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': 'error',

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',

  // Prevent direct mutation of this.state
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'off',

  // Prevent usage of isMounted
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': 'off',

  // Prevent usage of setState
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  'react/no-set-state': 'off',

  // Prevent using string references
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',

  // Prevent usage of unknown DOM property
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',

  // Require ES6 class declarations over React.createClass
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': ['error', {
    ignore: [],
    customValidators: [],
    skipUndeclared: false,
  }],

  // Require render() methods to return something
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': 'error',

  // Enforce component methods order
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
  'react/sort-comp': ['error', {
    order: [
      'static-variables',
      'static-methods',
      'instance-variables',
      'lifecycle',
      '/^handle.+$/',
      '/^on.+$/',
      'getters',
      'setters',
      '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
      'instance-methods',
      'everything-else',
      'rendering',
    ],
    groups: {
      lifecycle: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'getDerivedStateFromProps',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentDidCatch',
        'componentWillUnmount',
      ],
      rendering: [
        '/^render.+$/',
        'render',
      ],
    },
  }],

  // Disallow target="_blank" on links
  // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  // only .jsx files may have JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

  // prevent accidental JS comments from being injected into JSX as text
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',

  // disallow using React.render/ReactDOM.render's return value
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',

  // require a shouldComponentUpdate method, or PureRenderMixin
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  'react/require-optimization': ['off', { allowDecorators: [] }],

  // warn against using findDOMNode()
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'error',

  // Forbid certain props on Components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  'react/forbid-component-props': ['off', { forbid: [] }],

  // Forbid certain elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  'react/forbid-elements': ['off', { forbid: [] }],

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',

  // Prevent unused propType definitions
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  'react/no-unused-prop-types': ['error', {
    customValidators: [
    ],
    skipShapeProps: true,
  }],

  // Require style prop value be an object or var
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'error',

  // Prevent invalid characters from appearing in markup
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': 'error',

  // Prevent passing of children as props
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',

  // Enforce spaces before the closing bracket of self-closing JSX elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
  // Deprecated in favor of jsx-tag-spacing
  'react/jsx-space-before-closing': ['off', 'always'],

  // Prevent usage of Array index in keys
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'error',

  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
  'react/require-default-props': ['warn', {
    forbidDefaultForRequired: false,
    classes: 'defaultProps',
    functions: 'defaultArguments',
    ignoreFunctionalComponents: false,
  }],

  // Forbids using non-exported propTypes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // this is intentionally set to "warn". it would be "error",
  // but it's only critical if you're stripping propTypes in production.
  'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

  // Prevent void DOM elements from receiving children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error',

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
  'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',

  // Prevent unused state values
  // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
  'react/no-unused-state': 'error',

  // Enforces consistent naming for boolean props
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
  'react/boolean-prop-naming': ['off', {
    propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
    rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
    message: '',
  }],

  // Prevents common casing typos
  // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
  'react/no-typos': 'error',

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': ['error', 'always'],

  // Prevent using this.state within a this.setState
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',

  // Prevent usage of button elements without an explicit type attribute
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
  'react/button-has-type': ['error', {
    button: true,
    submit: true,
    reset: false,
  }],

  // Prevent this from being used in stateless functional components
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': 'error',

  // Validate JSX maximum depth
  // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
  'react/jsx-max-depth': 'off',

  // Prevent usage of UNSAFE_ methods
  // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
  'react/no-unsafe': 'off',

  // Enforce shorthand or standard form for React fragments
  // https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // Enforce state initialization style
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // TODO: set to "never" once babel-preset-airbnb supports public class fields
  'react/state-in-constructor': ['error', 'always'],

  // Enforces where React component static properties should be positioned
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  // TODO: set to "static public field" once babel-preset-airbnb supports public class fields
  'react/static-property-placement': ['error', 'property assignment'],

  // Disallow JSX props spreading
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'react/jsx-props-no-spreading': ['error', {
    html: 'ignore',
    custom: 'enforce',
    explicitSpread: 'ignore',
    exceptions: [],
  }],

  // Enforce that props are read-only
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  'react/prefer-read-only-props': 'off',

  // Prevent usage of `javascript:` URLs
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': ['error', [
    {
      name: 'Link',
      props: ['to'],
    },
  ]],

  // Disallow unnecessary fragments
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': 'error',

  // Prevent adjacent inline elements not separated by whitespace
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  // TODO: enable? semver-major
  'react/no-adjacent-inline-elements': 'off',

  // Enforce a specific function type for function components
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': ['error', {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function',
  }],

  // Prevent react contexts from taking non-stable values
  // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-no-constructed-context-values.md
  'react/jsx-no-constructed-context-values': 'error',

  // Prevent creating unstable components inside components
  // https://github.com/yannickcr/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/no-unstable-nested-components.md
  'react/no-unstable-nested-components': 'error',

  // Enforce that namespaces are not used in React elements
  // https://github.com/yannickcr/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/no-namespace.md
  'react/no-namespace': 'error',

  // Prefer exact proptype definitions
  // https://github.com/yannickcr/eslint-plugin-react/blob/8785c169c25b09b33c95655bf508cf46263bc53f/docs/rules/prefer-exact-props.md
  'react/prefer-exact-props': 'error',

  // Lifecycle methods should be methods on the prototype, not class fields
  // https://github.com/yannickcr/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-arrow-function-lifecycle.md
  'react/no-arrow-function-lifecycle': 'error',

  // Prevent usage of invalid attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-invalid-html-attribute.md
  'react/no-invalid-html-attribute': 'error',

  // Prevent declaring unused methods of component class
  // https://github.com/yannickcr/eslint-plugin-react/blob/21e01b61af7a38fc86d94f27eb66cda8054582ed/docs/rules/no-unused-class-component-methods.md
  'react/no-unused-class-component-methods': 'error',
};

const configs = [
  {
    files,
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files,
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  {
    files,
    languageOptions: reactPlugin.configs.flat['jsx-runtime'].languageOptions,
    rules,
  },
];

export {
  rules,
  configs,
};
