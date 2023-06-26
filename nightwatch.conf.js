module.exports = {
  src_folders: ["./Tests"],
  page_objects_path: ["./PageObject"],
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
  custom_assertions_path: '',
  plugins: [],

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--incognito',
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: 'C:\\Users\\Adriana\\DecemberLabs_Nightwatch\\node_modules\\chromedriver\\lib\\chromedriver\\chromedriver.exe',
        port: 9515,
        host: 'localhost',
        ssl: false,
        default_path_prefix: '',
        proxy: undefined,
        cli_args: []
      }
    }
  }
};
