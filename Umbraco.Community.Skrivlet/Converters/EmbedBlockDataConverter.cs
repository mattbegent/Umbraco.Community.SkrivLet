using System.Text.Json;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class EmbedBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("embed");
        }

        public SkrivLetBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new SkrivLetBlock<EmbedBlockData>(id, type);
            block.Data = new EmbedBlockData();
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
                    case "service":
                        reader.Read();
                        block.Data.Service = reader.GetString() ?? "";
                        break;
                    case "source":
                        reader.Read();
                        block.Data.Source = reader.GetString() ?? "";
                        break;
                    case "embed":
                        reader.Read();
                        block.Data.Embed = reader.GetString() ?? "";
                        break;
                    case "width":
                        reader.Read();
                        block.Data.Width = reader.GetInt16();
                        break;
                    case "height":
                        reader.Read();
                        block.Data.Height = reader.GetInt16();
                        break;
                    case "caption":
                        reader.Read();
                        block.Data.Caption = reader.GetString() ?? "";
                        break;
                }
            }
            return block;
        }
    }

    public class EmbedBlockData
    {
        public string Service { get; set; }
        public string Source { get; set; }
        public string Embed { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string Caption { get; set; }
    }
}
