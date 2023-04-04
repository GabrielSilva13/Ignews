import React, { useEffect, useState } from "react";

export const Async = () => {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);
  return (
    <div>
      Async
      {!isButtonInvisible && <button>Button</button>}
    </div>
  );
};
