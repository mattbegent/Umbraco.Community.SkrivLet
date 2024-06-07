using System.Text.Json;

namespace BegeWrite.Converters
{
    public class QuoteBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("quote");
        }

        public BegeWriteBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new BegeWriteBlock<QuoteBlockData>(id, type);
            block.Data = new QuoteBlockData();
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
                    case "caption":
                        reader.Read();
                        block.Data.Caption = reader.GetString() ?? "";
                        break;
                    case "alignment":
                        reader.Read();
                        block.Data.Alignment = reader.GetString() ?? "left";
                        break;
                }
            }
            return block;
        }
    }

    public class QuoteBlockData
    {
        public string Text { get; set; }
        public string Caption { get; set; }
        public string Alignment { get; set; }
    }
}
