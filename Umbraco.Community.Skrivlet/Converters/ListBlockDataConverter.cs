using System.Text.Json;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class ListBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("list");
        }

        public SkrivLetBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new SkrivLetBlock<ListBlockData>(id, type);
            block.Data = new ListBlockData();
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
                    case "style":
                        reader.Read();
                        block.Data.Style = reader.GetString() ?? "";
                        break;
                    case "items":
                        reader.Read();
                        if (reader.TokenType == JsonTokenType.StartArray)
                        {
                            reader.Read();
                            while (reader.TokenType != JsonTokenType.EndArray)
                            {
                                block.Data.Items.Add(reader.GetString() ?? "");
                                reader.Read();
                            }
                        }


                        break;
                }
            }
            return block;
        }
    }

    public class ListBlockData
    {
        public string Style { get; set; }
        public List<string> Items { get; set; } = new List<string>();
    }
}
