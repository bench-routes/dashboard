export interface MenuType {
  path: string;
  name: string;
  routes?: MenuType[];
}

export const menu = [
  { path: "/", name: "Home" },
  { path: "/analytics", name: "Analytics" },
  { path: "/quick-input", name: "Input" },
  {
    path: "/tests",
    name: "Tests",
    routes: [
      { path: "/tests/ping", name: "Ping" },
      { path: "/tests/fping", name: "FPing" },
      { path: "/tests/jitter", name: "Jitter" },
    ],
  },
  { path: "/config", name: "Config" },
];
