const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/component-deprecation');
const deprecationsJson = require('../../component_deprecation.json');

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
  parserOptions: {ecmaVersion: 6, ecmaFeatures: {jsx: true}},
});

const ruleTester = new RuleTester();

const ruleOptions = [{deprecations: deprecationsJson}];
const invalidExample = "import {Avatar} from 'module-with-deprecations'; const test = <Avatar url={'some_uri_string'}/>";

// NOTE: Deprecated components (not prop deprecation) will error at import and again if used as jsx tag.
ruleTester.run('component-deprecation', rule, {
  valid: [
    {
      options: ruleOptions,
      code: `
const Avatar = require('another-module').Avatar;
const test = <Avatar source={{uri: 'some_uri_string'}}/>;
`,
    },
    {
      options: ruleOptions,
      code: `
const {Avatar, List} = require('another-module');
const test = <Avatar source={{uri: 'some_uri_string'}}/>;
`,
    },
    {
      options: ruleOptions,
      code: `
const module = require('another-module');
const {Avatar, TextField} = module;
const test1 = <Avatar source={{uri: 'some_uri_string'}}/>;
const test2 = <TextField>Bla</TextField>;
`,
    },
    {
      options: ruleOptions,
      code: `
import {Avatar, TextField} from 'another-module';
const test1 = <Avatar url={'some_uri_string'}/>;
const test2 = <TextField>Bla</TextField>;
`,
    },
    {
      options: ruleOptions,
      code: `
import {List} from 'module-with-deprecations';
<List/>`,
    },
  ],
  invalid: [
    {
      options: ruleOptions,
      code: invalidExample,
      errors: [{message: "The 'Avatar' component's prop 'url' is deprecated. Please use the 'source' prop instead."}],
    },
    {
      options: [{...ruleOptions[0], dueDate: '10/11/18'}],
      code: invalidExample,
      errors: [
        {
          message:
            "The 'Avatar' component's prop 'url' is deprecated. Please use the 'source' prop instead. Please fix this issue by 10/11/18!", // eslint-disable-line
        },
      ],
    },
    {
      options: ruleOptions,
      code: 'import {Button} from \'module-with-deprecations\'; <Button text="my button"/>',
      output: 'import {Button} from \'module-with-deprecations\'; <Button label="my button"/>',
      errors: [{message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
    },
    {
      options: ruleOptions,
      code: 'import {TextInput} from \'module-with-deprecations\'; <TextInput placeholder="first name"/>',
      errors: [
        {message: "The 'TextInput' component is deprecated. Please use the 'TextField' component instead."},
        {message: "The 'TextInput' component is deprecated. Please use the 'TextField' component instead."},
      ],
    },
    {
      options: ruleOptions,
      code: "import {List} from 'module-with-deprecations'; <List.Part/>",
      errors: [{message: "The 'List.Part' component is deprecated. Please use the 'List.Item' component instead."}],
    },
    {
      options: ruleOptions,
      code: `
import {Button} from 'module-with-deprecations';
const props = {text: "button", color: "red"};
<Button {...props} value="value"/>`,
      errors: [{message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
    },
//     {
//       options: ruleOptions,
//       code: `
// import {Button as B} from 'module-with-deprecations';
// const props = {text: "button", color: "red"};
// <B {...props} value="value"/>`,
//       errors: [{message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
//     },
//     {
//       options: ruleOptions,
//       code: `
// import * as module from 'module-with-deprecations';
// const {Button} = module;
// const props = {text: "button", color: "red"};
// <Button {...props} value="value"/>`,
//       errors: [{message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
//     },
//     {
//       options: ruleOptions,
//       code: `
// import * as module from 'module-with-deprecations';
// const props = {text: "button", color: "red"};
// <module.Button {...props} value="value"/>`,
//       errors: [{message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
//     },
//     {
//       options: ruleOptions,
//       code: `
// import * as module from 'module-with-deprecations';
// <module.List.Part/>`,
//       errors: [{message: "The 'List.Part' component is deprecated. Please use the 'List.Item' component instead."}],
//     },
//     {
//       options: ruleOptions,
//       code: `
// import {List} from 'another-module-with-deprecations';
// <List/>`,
//       errors: [{message: "The 'List' component is deprecated. Please use the 'ListList' component instead."}],
//     },
//     {
//       options: ruleOptions,
//       code: `
// import {View, Button, TextInput} from 'module-with-deprecations';
// <View>
//   <Button text="my button"/>
//   <TextInput placeholder="first name"/>
// </View>`,
//       errors: [
//         {message: "The 'TextInput' component is deprecated. Please use the 'TextField' component instead."},
//         {message: "The 'TextInput' component is deprecated. Please use the 'TextField' component instead."},
//         {message: "The 'Button' component's prop 'text' is deprecated. Please use the 'label' prop instead."}],
//     },
  ],
});
