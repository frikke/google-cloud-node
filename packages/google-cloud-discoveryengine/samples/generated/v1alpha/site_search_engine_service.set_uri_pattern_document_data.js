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

function main(siteSearchEngine) {
  // [START discoveryengine_v1alpha_generated_SiteSearchEngineService_SetUriPatternDocumentData_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of the
   *  SiteSearchEngine google.cloud.discoveryengine.v1alpha.SiteSearchEngine,
   *  such as
   *  `projects/* /locations/* /collections/* /dataStores/* /siteSearchEngine`.
   */
  // const siteSearchEngine = 'abc123'
  /**
   *  Document data keyed by URI pattern. Each entry must be consistent with
   *  the Schema google.cloud.discoveryengine.v1alpha.Schema. For example:
   *  Schema google.cloud.discoveryengine.v1alpha.Schema  = {
   *  "type": "object",
   *  "properties": {
   *    "Categories": {
   *      "type": "array",
   *      "items": {
   *        "retrievable": true,
   *        "type": "string"
   *      }
   *    }
   *  }
   *  document_data_map = {
   *    "www.url1.com/*": {
   *      "Categories": "category1", "category2" 
   *    },
   *    "www.url2.com/*": {
   *      "Categories": "category3" 
   *    }
   *  }
   */
  // const documentDataMap = [1,2,3,4]
  /**
   *  If true, clears the document data map. If true,
   *  SetUriPatternDocumentDataRequest.document_data_map google.cloud.discoveryengine.v1alpha.SetUriPatternDocumentDataRequest.document_data_map 
   *  must be empty.
   */
  // const emptyDocumentDataMap = true
  /**
   *  Optional. If not provided, the current
   *  Schema google.cloud.discoveryengine.v1alpha.Schema  is used. If provided,
   *  validates and updates the
   *  Schema google.cloud.discoveryengine.v1alpha.Schema. If validation fails,
   *  an error is returned.
   */
  // const schema = {}

  // Imports the Discoveryengine library
  const {SiteSearchEngineServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new SiteSearchEngineServiceClient();

  async function callSetUriPatternDocumentData() {
    // Construct request
    const request = {
      siteSearchEngine,
    };

    // Run request
    const [operation] = await discoveryengineClient.setUriPatternDocumentData(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callSetUriPatternDocumentData();
  // [END discoveryengine_v1alpha_generated_SiteSearchEngineService_SetUriPatternDocumentData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));