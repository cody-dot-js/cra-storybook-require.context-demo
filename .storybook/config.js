import { configure } from "@storybook/react";

const storybookContext = require.context("../", true, /\.story\.js/);

const appOnlyStoryKeys = keys().filter(key => key.startsWith("./"));

storybookContext.keys = () => appOnlyStoryKeys;

configure(storybookContext, module);
