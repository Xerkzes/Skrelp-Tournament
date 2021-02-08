import React, { useState } from "react";

interface Props {}

export const Counter: React.FC<Props> = ({}) => {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
};
