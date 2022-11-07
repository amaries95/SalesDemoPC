using CognitiveSearch.UI.Models;
using System.Collections.Generic;

namespace CognitiveSearch.UI.ViewModels
{
	public class DocumentsRetrievedViewModel
	{
		public List<string> MetadataStoragePath { get; } = new List<string>();

		public List<Value> FilesInfo { get; set; } = new List<Value>();

		public string SasToken { get; set; }
	}
}
