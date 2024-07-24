// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, userId, user) {
  // [START merchantapi_v1beta_generated_UserService_CreateUser_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the account for which a user will be
   *  created. Format: `accounts/{account}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The email address of the user (for example,
   *  `john.doe@gmail.com`).
   */
  // const userId = 'abc123'
  /**
   *  Required. The user to create.
   */
  // const user = {}

  // Imports the Accounts library
  const {UserServiceClient} = require('@google-shopping/accounts').v1beta;

  // Instantiates a client
  const accountsClient = new UserServiceClient();

  async function callCreateUser() {
    // Construct request
    const request = {
      parent,
      userId,
      user,
    };

    // Run request
    const response = await accountsClient.createUser(request);
    console.log(response);
  }

  callCreateUser();
  // [END merchantapi_v1beta_generated_UserService_CreateUser_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));