"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ComponentsPage from "@/components/ComponentsPage";

const queryClient = new QueryClient();

export default function Components() {
  return (
    <QueryClientProvider client={queryClient}>
      <ComponentsPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
