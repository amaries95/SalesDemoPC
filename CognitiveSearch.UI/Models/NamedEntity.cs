using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace CognitiveSearch.UI.Models
{
	public class NamedEntity
	{
		[JsonPropertyName("id")]
		public string id { get; set; }

		[JsonPropertyName("type")]
		public string type { get; set; }

		[JsonPropertyName("text")]
		public string text { get; set; }

		[JsonPropertyName("start")]
		public int start { get; set; }

		[JsonPropertyName("end")]
		public int end { get; set; }

		[JsonPropertyName("confidence")]
		public double confidence { get; set; }
	}
}
