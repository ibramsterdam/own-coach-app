import RootNavigation from "src/navigation/RootNavigation";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='light' />
      <RootNavigation />
    </QueryClientProvider>
  );
}
