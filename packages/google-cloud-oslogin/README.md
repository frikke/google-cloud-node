[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud OS Login: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/os-login.svg)](https://www.npmjs.org/package/@google-cloud/os-login)




Google Cloud OS Login API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/blob/main/CHANGELOG.md).

* [Google Cloud OS Login Node.js Client API Reference][client-docs]
* [Google Cloud OS Login Documentation][product-docs]
* [github.com/googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud OS Login API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/os-login
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The unique ID for the user in format `users/{user}`.
 */
// const name = 'abc123'
/**
 *  The project ID of the Google Cloud Platform project.
 */
// const projectId = 'abc123'
/**
 *  A system ID for filtering the results of the request.
 */
// const systemId = 'abc123'

// Imports the Oslogin library
const {OsLoginServiceClient} = require('@google-cloud/os-login').v1;

// Instantiates a client
const osloginClient = new OsLoginServiceClient();

async function callGetLoginProfile() {
  // Construct request
  const request = {
    name,
  };

  // Run request
  const response = await osloginClient.getLoginProfile(request);
  console.log(response[0]);
}

callGetLoginProfile();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Os_login_service.delete_posix_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_posix_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_posix_account.js,samples/README.md) |
| Os_login_service.delete_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_ssh_public_key.js,samples/README.md) |
| Os_login_service.get_login_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_login_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_login_profile.js,samples/README.md) |
| Os_login_service.get_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_ssh_public_key.js,samples/README.md) |
| Os_login_service.import_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.import_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.import_ssh_public_key.js,samples/README.md) |
| Os_login_service.update_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.update_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1/os_login_service.update_ssh_public_key.js,samples/README.md) |
| Os_login_service.delete_posix_account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_posix_account.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_posix_account.js,samples/README.md) |
| Os_login_service.delete_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_ssh_public_key.js,samples/README.md) |
| Os_login_service.get_login_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_login_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_login_profile.js,samples/README.md) |
| Os_login_service.get_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_ssh_public_key.js,samples/README.md) |
| Os_login_service.import_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.import_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.import_ssh_public_key.js,samples/README.md) |
| Os_login_service.update_ssh_public_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.update_ssh_public_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.update_ssh_public_key.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/quickstart.js,samples/README.md) |
| Sample.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/test/sample.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oslogin/samples/test/sample.test.js,samples/README.md) |



The [Google Cloud OS Login Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/os-login@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/os-login/latest
[product-docs]: https://cloud.google.com/compute/docs/oslogin/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=oslogin.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started