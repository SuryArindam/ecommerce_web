import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false, // self added
      staleTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
