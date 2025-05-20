import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { QUERY_CLIENT } from "@faridsh69/react-utils";

export const MainApp = (props: any) => {
  const { children } = props;

  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <ToastContainer />
      {children}
    </QueryClientProvider>
  );
};
