using System.Text.Json;
using Umbraco.Cms.Core;

namespace BegeWrite.Converters
{
    public class ImageBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("image");
        }

        public BegeWriteBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new BegeWriteBlock<ImageBlockData>(id, type);
            block.Data = new ImageBlockData();
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
                    case "url":
                        reader.Read();
                        block.Data.Url = reader.GetString() ?? "";
                        break;
                    case "alt":
                        reader.Read();
                        block.Data.Alt = reader.GetString() ?? "";
                        break;
                    case "udi":
                        reader.Read();
                        block.Data.Udi = UdiParser.Parse(reader.GetString());
                        break;
                }
            }
            return block;
        }
    }

    public class ImageBlockData
    {
        public string Url { get; set; }
        public string Alt { get; set; }
        public Udi Udi { get; set; }
    }
}
