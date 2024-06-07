using System.Text.Json.Serialization;

namespace BegeWrite
{
	public class BegeWriteModel
	{
		[JsonPropertyName("time")]
		public long LastModified { get; set; }
		[JsonPropertyName("blocks")]
		public IEnumerable<BegeWriteBlockBase> Blocks { get; set; }
		[JsonPropertyName("version")]
		public string Version { get; set; }
	}
}
