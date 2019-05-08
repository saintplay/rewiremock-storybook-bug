import React from "react";
import { storiesOf } from "@storybook/react";
import rewiremock from "rewiremock/webpack";

const ComponentExample = rewiremock.proxy("./Lobby", {
  "./lib": {
    COUNT: 100
  }
});

storiesOf("ComponentExample", module).add("with mocked data", () => (
  <ComponentExample />
));
