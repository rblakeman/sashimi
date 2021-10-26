import React from "react";

import { Example } from "../";

import { Text } from "../../library/components";
// import * as THEME from "../../components/constants";

const ButtonDocs = () => {
  const name = "Text";
  const examples = [
    {
      title: "Types",
      description: "An example of styled Text components",
      code: (
        <div style={{ flexDirection: "column" }}>
          <Text size="title">Title</Text>
          <Text size="header">Header</Text>
          <Text size="description">Description</Text>
          <Text>Standard</Text>
          <Text size="small">Small</Text>
        </div>
      )
    },
    {
      title: "Weight",
      description: "An example of styled Text components",
      code: (
        <div style={{ flexDirection: "column" }}>
          <Text bold>Bold</Text>
          <Text semibold>Semibold</Text>
          <Text>Normal</Text>
          <Text light>Light</Text>
        </div>
      )
    }
  ];

  return (
    <>
      <Text size="title">{name}</Text>
      {examples.map((example, idx) => (
        <Example key={`${name}-Example-${idx}`} {...example} />
      ))}
    </>
  );
};

export default ButtonDocs;
