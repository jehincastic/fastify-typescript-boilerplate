const fs = require("fs");
const path = require("path");

const makeApiUrl = (urlPath) => `/api/v1${
  urlPath.startsWith("/")
    ? ""
    : "/"
}${urlPath.toLowerCase()}`;

const capitialize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const filerTypes = (types) => {
  const typeObj = {
    body: [],
    params: [],
    query: [],
    response: [],
    responseData: {},
  };
  types.forEach(({ name, type, data }) => {
    typeObj[type].push(name);
    if (type === "response") {
      typeObj.responseData[name] = data;
    }
  });
  return typeObj;
};

const getAllTypes = () => {
  const schemaPath = path.join(process.cwd(), "schema");
  let files = fs.readdirSync(schemaPath, { withFileTypes: true });
  files = files.filter((file) => file.isFile() && file.name.endsWith(".json"));
  const fileContents = files.map(({ name }) => {
    const filePath = path.join(schemaPath, name);
    const filecontent = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return filecontent.map((data) => {
      const { title, schemaType } = data;
      const returnData = {
        name: capitialize(title),
        type: schemaType,
      };
      if (schemaType === "response") {
        returnData.data = data;
      }
      return returnData;
    });
  });
  return filerTypes(fileContents.flat());
};

module.exports = {
  makeApiUrl,
  capitialize,
  getAllTypes,
};
