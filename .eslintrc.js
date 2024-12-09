module.exports = {
  root: true,
  extends: "next/core-web-vitals",
  plugins: ["eslint-plugin-node"],
  rules: {
    "node/no-unpublished-import": "off",
    "node/no-missing-import": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "react/display-name": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-key": "off",
    "@next/next/no-sync-scripts": "off",
  },
};
