export const useAuth = () => {
  const token = localStorage.getItem("accessToken");

  return token && token.length > 0;
};
