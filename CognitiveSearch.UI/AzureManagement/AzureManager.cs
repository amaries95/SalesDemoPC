using Azure;
using Azure.Core;
using Azure.Identity;
using Azure.Search.Documents;
using Azure.Storage;
using Azure.Storage.Blobs;
using Azure.Storage.Sas;
using Microsoft.Extensions.Configuration;
using System;

namespace CognitiveSearch.UI.AzureManagement
{
    public class AzureManager
    {
        private readonly string _storageAccountName;
        private readonly string _storageAccountKey;
		private readonly string _storageContainerName;
		private readonly string _storageContainerAddress;

		public AzureManager(IConfiguration configuration)
        {
			_storageAccountName = configuration.GetSection("StorageAccountName")?.Value;
			_storageAccountKey = configuration.GetSection("StorageAccountKey")?.Value;
			_storageContainerName = configuration.GetSection("BlobContainerName")?.Value;
			_storageContainerAddress = configuration.GetSection("StorageContainerAddress")?.Value;
		}

		public string GetBlobStorageSasToken()
        {
			var storageAccountUri = new Uri(_storageContainerAddress);
			var blobServiceClient = new BlobServiceClient(storageAccountUri, new StorageSharedKeyCredential(_storageAccountName, _storageAccountKey));
			var blobContainerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
			var sasUri = blobContainerClient.GenerateSasUri(BlobContainerSasPermissions.Read, DateTimeOffset.UtcNow.AddHours(2));

			return sasUri.Query.ToString();

		}
    }
}
