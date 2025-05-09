// .storybook/webpack.config.ts

import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // ─── 1) Extend resolve ──────────────────────────────────────────
  config.resolve = {
    ...(config.resolve ?? {}),
    modules: [...(config.resolve?.modules ?? []), paths.src],
    extensions: [...(config.resolve?.extensions ?? []), ".ts", ".tsx"],
  };

  // ─── 2) Cast module.rules to RuleSetRule[] so TS knows about `test` ───
  const existingRules = (config.module?.rules as RuleSetRule[]) ?? [];

  // ─── 3) Exclude `.svg` from any existing file-loader rules ────────────
  const rulesWithoutSvg: RuleSetRule[] = existingRules.map((rule) => {
    if (rule.test instanceof RegExp && rule.test.test(".svg")) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // ─── 4) Build the complete list of rules ───────────────────────────
  const newRules: RuleSetRule[] = [
    ...rulesWithoutSvg,
    buildCssLoader(true),
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: true },
        },
      ],
    },
  ];

  // ─── 5) Reassign module.rules safely ──────────────────────────────
  config.module = {
    ...(config.module ?? {}),
    rules: newRules,
  };

  return config;
};
