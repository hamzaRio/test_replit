import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  username: string;
  role: string;
}

interface AuthResponse {
  user: User;
}

export function useAuth() {
  const { data, isLoading, error } = useQuery<User>({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return {
    user: data,
    isLoading,
    isAuthenticated: !!data,
    error,
  };
}
