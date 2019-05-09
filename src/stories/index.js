import React from "react";
import { storiesOf } from "@storybook/react";
import rewiremock from "rewiremock/webpack";

import "./lib";
import "./ComponentExample";

const ComponentExample = rewiremock.proxy(
  () => require("./ComponentExample"),
  () => {
    rewiremock(() => require("./lib")).with({
      COUNT: 100
    });
  }
).default;

storiesOf("ComponentExample", module).add("with mocked data", () => (
  <ComponentExample />
));
