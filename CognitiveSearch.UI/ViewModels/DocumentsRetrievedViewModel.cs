using System.Collections.Generic;

namespace CognitiveSearch.UI.ViewModels
{
	public class DocumentsRetrievedViewModel
	{
		public List<string> MetadataStoragePath { get; } = new List<string>();

		public string SasToken { get; set; }
	}
}
