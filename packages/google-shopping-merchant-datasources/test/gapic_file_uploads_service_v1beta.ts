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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as fileuploadsserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta.FileUploadsServiceClient', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
    });

    it('has universeDomain', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process === 'object' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath =
          fileuploadsserviceModule.v1beta.FileUploadsServiceClient.servicePath;
        assert.strictEqual(servicePath, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          fileuploadsserviceModule.v1beta.FileUploadsServiceClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          universeDomain: 'example.com',
        });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'merchantapi.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          universe_domain: 'example.com',
        });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'merchantapi.example.com');
    });

    if (typeof process === 'object' && 'env' in process) {
      describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
        it('sets apiEndpoint from environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client =
            new fileuploadsserviceModule.v1beta.FileUploadsServiceClient();
          const servicePath = client.apiEndpoint;
          assert.strictEqual(servicePath, 'merchantapi.example.com');
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });

        it('value configured in code has priority over environment variable', () => {
          const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
          const client =
            new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
              universeDomain: 'configured.example.com',
            });
          const servicePath = client.apiEndpoint;
          assert.strictEqual(servicePath, 'merchantapi.configured.example.com');
          if (saved) {
            process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
          } else {
            delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
          }
        });
      });
    }
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port =
        fileuploadsserviceModule.v1beta.FileUploadsServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          fallback: true,
        });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.fileUploadsServiceStub, undefined);
      await client.initialize();
      assert(client.fileUploadsServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      assert(client.fileUploadsServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.fileUploadsServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('getFileUpload', () => {
    it('invokes getFileUpload without error', async () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.FileUpload()
      );
      client.innerApiCalls.getFileUpload = stubSimpleCall(expectedResponse);
      const [response] = await client.getFileUpload(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFileUpload without error using callback', async () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.FileUpload()
      );
      client.innerApiCalls.getFileUpload =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getFileUpload(
          request,
          (
            err?: Error | null,
            result?: protos.google.shopping.merchant.datasources.v1beta.IFileUpload | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFileUpload with error', async () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getFileUpload = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getFileUpload(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFileUpload as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFileUpload with closed client', async () => {
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.shopping.merchant.datasources.v1beta.GetFileUploadRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getFileUpload(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('dataSource', () => {
      const fakePath = '/rendered/path/dataSource';
      const expectedParameters = {
        account: 'accountValue',
        datasource: 'datasourceValue',
      };
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.dataSourcePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.dataSourcePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('dataSourcePath', () => {
        const result = client.dataSourcePath('accountValue', 'datasourceValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.dataSourcePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromDataSourceName', () => {
        const result = client.matchAccountFromDataSourceName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.dataSourcePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDatasourceFromDataSourceName', () => {
        const result = client.matchDatasourceFromDataSourceName(fakePath);
        assert.strictEqual(result, 'datasourceValue');
        assert(
          (client.pathTemplates.dataSourcePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('fileUpload', () => {
      const fakePath = '/rendered/path/fileUpload';
      const expectedParameters = {
        account: 'accountValue',
        datasource: 'datasourceValue',
        fileupload: 'fileuploadValue',
      };
      const client =
        new fileuploadsserviceModule.v1beta.FileUploadsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.fileUploadPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.fileUploadPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('fileUploadPath', () => {
        const result = client.fileUploadPath(
          'accountValue',
          'datasourceValue',
          'fileuploadValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.fileUploadPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchAccountFromFileUploadName', () => {
        const result = client.matchAccountFromFileUploadName(fakePath);
        assert.strictEqual(result, 'accountValue');
        assert(
          (client.pathTemplates.fileUploadPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDatasourceFromFileUploadName', () => {
        const result = client.matchDatasourceFromFileUploadName(fakePath);
        assert.strictEqual(result, 'datasourceValue');
        assert(
          (client.pathTemplates.fileUploadPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchFileuploadFromFileUploadName', () => {
        const result = client.matchFileuploadFromFileUploadName(fakePath);
        assert.strictEqual(result, 'fileuploadValue');
        assert(
          (client.pathTemplates.fileUploadPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});