import { useState, useEffect } from "react";
import UserContext from "./src/context/UserContext";
import Home from "./src/screens/Home";
import { getToken } from "./src/api/storage";
import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const [user, setUser] = useState(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(token);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ user, setUser }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Home />
        </SafeAreaView>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
