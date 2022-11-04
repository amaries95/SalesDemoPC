using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CognitiveSearch.UI.Models
{
	public class JsonFileResponse
	{
		[JsonPropertyName("@odata.context")]
		public string OdataContext { get; set; }

		[JsonPropertyName("value")]
		public List<Value> value { get; set; }
	}
}
