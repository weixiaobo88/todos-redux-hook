const prod = {
  url: {
    API_URL: "https://myapp.herokuapp.com",
    API_URL_USERS: "https://myapp.herokuapp.com/users",
  },
};

const dev = {
  url: {
    // API_URL: "https://5fd06b911f23740016631881.mockapi.io/api/",
    API_URL: "http://localhost:8080",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
