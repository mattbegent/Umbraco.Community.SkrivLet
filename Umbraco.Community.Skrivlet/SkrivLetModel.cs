using System.Text.Json.Serialization;

namespace Umbraco.Community.SkrivLet
{
	public class SkrivLetModel
	{
		[JsonPropertyName("time")]
		public long LastModified { get; set; }
		[JsonPropertyName("blocks")]
		public IEnumerable<SkrivLetBlockBase> Blocks { get; set; }
		[JsonPropertyName("version")]
		public string Version { get; set; }
	}
}
