import React, { PropsWithChildren } from "react";

function Container2({ children }: PropsWithChildren) {
  return (
    <div className="w-full px-0 sm:px-16 md:px-80 lg:px-0 xl:px-[10px] 2xl:px-[2200px] lg:max-w-9xl  overflow-x-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Container2;
