const navConfig = require("./navConfig");
const sidebarConfig = require("./sidebarConfig");
console.log(sidebarConfig);
module.exports = {
  algolia: {
    apiKey: "1e23962724b59d018bdedc0f5a214ce5",
    indexName: "pipedream",
  },
  searchPlaceholder: "Search...",
  logo: "/pipedream.svg",
  repo: "PipedreamHQ/pipedream",
  nav: navConfig,

  // if your docs are not at the root of the repo:
  docsDir: "docs/docs",
  editLinks: true,
  // custom text for edit link. Defaults to "Edit this page"
  editLinkText: "Help us improve this page! Submit an edit on Github",
  sidebar: sidebarConfig,
  PIPEDREAM_BASE_URL: "https://pipedream.com",
  API_BASE_URL: "https://api.pipedream.com/v1",
  SQL_API_BASE_URL: "https://rt.pipedream.com/sql",
  PAYLOAD_SIZE_LIMIT: "512KB",
  MEMORY_LIMIT: "256MB",
  MEMORY_ABSOLUTE_LIMIT: "10GB",
  EMAIL_PAYLOAD_SIZE_LIMIT: "30MB",
  INSPECTOR_EVENT_LIMIT: "100",
  FUNCTION_PAYLOAD_LIMIT: "6MB",
  INSPECTOR_EVENT_EXPIRY_DAYS: "30",
  DAILY_INVOCATIONS_LIMIT: "333",
  FREE_ORG_DAILY_INVOCATIONS_LIMIT: "66",
  PRICE_PER_INVOCATION: "0.0002",
  FREE_MONTHLY_INVOCATIONS: "10,000",
  PRO_MONTHLY_INVOCATIONS: "20,000",
  TEAM_MONTHLY_INVOCATIONS: "20,000",
  ENTERPRISE_MONTHLY_INVOCATIONS: "100,000",
  TEAM_MEMBER_LIMIT: "5",
  PRO_MONTHLY_PRICE: "$19",
  TEAM_MONTHLY_PRICE: "$19",
  DEFAULT_WORKFLOW_QUEUE_SIZE: "100",
  MAX_WORKFLOW_QUEUE_SIZE: "10,000",
  NODE_VERSION: "14",
  PYTHON_VERSION: "3.8",
  CONFIGURED_PROPS_SIZE_LIMIT: "64KB",
  SERVICE_DB_SIZE_LIMIT: "60KB",
  TMP_SIZE_LIMIT: "512MB",
};
