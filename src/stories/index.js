import React from "react";
import { storiesOf } from "@storybook/react";
import rewiremock from "rewiremock";

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
