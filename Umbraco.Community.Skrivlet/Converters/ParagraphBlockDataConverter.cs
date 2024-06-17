using System.Text.Json;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class ParagraphBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("paragraph");
        }

        public SkrivLetBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new SkrivLetBlock<ParagraphBlockData>(id, type);
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
                        block.Data = new ParagraphBlockData { Text = reader.GetString() ?? "" };
                        break;
                }
            }
            return block;
        }
    }

    public class ParagraphBlockData
    {
        public string Text { get; set; }

        public override string ToString()
        {
            return Text;
        }
    }
}
