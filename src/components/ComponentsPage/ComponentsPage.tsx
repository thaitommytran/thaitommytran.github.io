import React from "react";
import AutoCompleteInput from "@/components/AutoCompleteInput";

const ComponentsPage = () => {
  return (
    <div className="flex w-full flex-col items-center pt-[8rem]">
      {/* ComponentsPage Header */}
      <h2 className="border-b-2 border-b-rose-500 text-2xl font-semibold text-rose-500">
        Components
      </h2>

      {/* ComponentsPage Content */}
      <AutoCompleteInput />
    </div>
  );
};

export default ComponentsPage;
