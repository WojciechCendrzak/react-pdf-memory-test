import packageJson from "../package.json";

const getVersion = (dependency) => {
  const version =
    packageJson.dependencies[dependency] ||
    packageJson.devDependencies[dependency];

  return version?.replace(/[\^~]/, "") || "unknown";
};

export const dependenciesString = ["vite", "react", "react-pdf"]
  .map((dependency) => `${dependency} (${getVersion(dependency)})`)
  .join(", ");
