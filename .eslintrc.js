module.exports = {
  root: true,
  extends: "next/core-web-vitals",
  plugins: ["eslint-plugin-node"],
  rules: {
    "node/no-unpublished-import": "off",
    "node/no-missing-import": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off",
  },
};
