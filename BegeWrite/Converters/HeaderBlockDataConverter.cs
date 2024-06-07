using System.Text.Json;

namespace BegeWrite.Converters
{
    public class HeaderBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("header");
        }

        public BegeWriteBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new BegeWriteBlock<HeaderBlockData>(id, type);
            block.Data = new HeaderBlockData();
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
                    case "text":
                        reader.Read();
                        block.Data.Text = reader.GetString() ?? "";
                        break;
                    case "level":
                        reader.Read();
                        block.Data.Level = reader.GetInt32();
                        break;
                }
            }
            return block;
        }
    }

    public class HeaderBlockData
    {
        public string Text { get; set; }
        public int Level { get; set; }
    }
}
