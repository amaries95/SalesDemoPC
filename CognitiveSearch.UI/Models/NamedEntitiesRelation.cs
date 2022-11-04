using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace CognitiveSearch.UI.Models
{
	public class NamedEntitiesRelation
	{
		[JsonPropertyName("left")]
		public string left { get; set; }

		[JsonPropertyName("right")]
		public string right { get; set; }

		[JsonPropertyName("type")]
		public string type { get; set; }

		[JsonPropertyName("confidence")]
		public double confidence { get; set; }
	}
}
