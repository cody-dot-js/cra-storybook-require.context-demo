import { configure } from "@storybook/react";

// Get our webpack context api function object
// Just resolve relative to the app's root directory recursively.
// We will adjust the`keys` returned via the context module api object's method
// keys() by filtering out anything in `node_modules`.
const storybookContext = require.context("../", true, /\.story\.js/);

// Filter out any keys that aren't in our app directly, e.g. in `node_modules`
// Keys in the app always seem to start with `"./"`, while keys in `node_modules`
// start with `<module-name-here>`
const appOnlyStoryKeys = keys().filter(key => key.startsWith("./"));

// override the context api object's keys method, just return our filtered keys
storybookContext.keys = () => appOnlyStoryKeys;

// configure storybook!
configure(storybookContext, module);
