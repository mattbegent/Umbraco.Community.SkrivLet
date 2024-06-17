using System.Text.Json;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class CodeBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("code");
        }

        public SkrivLetBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new SkrivLetBlock<CodeBlockData>(id, type);
            block.Data = new CodeBlockData();
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
                    case "code":
                        reader.Read();
                        block.Data.Code = reader.GetString() ?? "";
                        break;
                }
            }
            return block;
        }
    }

    public class CodeBlockData
    {
        public string Code { get; set; }
    }
}
