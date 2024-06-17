using System.Text.Json;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class RawHtmlBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("raw");
        }

        public SkrivLetBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new SkrivLetBlock<RawHtmlBlockData>(id, type);
            block.Data = new RawHtmlBlockData();
            while (reader.Read())
            {
                if (reader.TokenType == JsonTokenType.EndObject)
                {
                    return block;
                }

                // Get the key.
                if (reader.TokenType != JsonTokenType.PropertyName)
                {
                    throw new JsonException();
                }

                string? propertyName = reader.GetString() ?? "";
                switch (propertyName.ToLower())
                {
                    case "html":
                        reader.Read();
                        block.Data.Html = reader.GetString() ?? "";
                        break;
                }
            }
            return block;
        }
    }

    public class RawHtmlBlockData
    {
        public string Html { get; set; }
    }
}
