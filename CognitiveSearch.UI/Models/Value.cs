using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CognitiveSearch.UI.Models
{
	public class Value
	{
		[JsonPropertyName("@search.score")]
		public int SearchScore { get; set; }

		[JsonPropertyName("id")]
		public string id { get; set; }

		[JsonPropertyName("content")]
		public string content { get; set; }

		[JsonPropertyName("metadata_storage_path")]
		public string metadata_storage_path { get; set; }

		[JsonPropertyName("named_entities")]
		public List<NamedEntity> named_entities { get; set; }

		[JsonPropertyName("named_entities_relations")]
		public List<NamedEntitiesRelation> named_entities_relations { get; set; }
	}
}
