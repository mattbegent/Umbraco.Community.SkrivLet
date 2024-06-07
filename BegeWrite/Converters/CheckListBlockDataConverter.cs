using System.Text.Json;

namespace BegeWrite.Converters
{
    public class CheckListBlockDataConverter : IBlockDataConverter
    {
        public bool CanConvert(string type)
        {
            return type.Equals("checklist");
        }

        public BegeWriteBlockBase Convert(ref Utf8JsonReader reader, string id, string type)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            var block = new BegeWriteBlock<CheckListBlockData>(id, type);
            block.Data = new CheckListBlockData();
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
                    case "items":
                        reader.Read();
                        if (reader.TokenType == JsonTokenType.StartArray)
                        {
                            reader.Read();
                            while (reader.TokenType != JsonTokenType.EndArray)
                            {
                                var item = ReadCheckListItem(ref reader);
                                if (item != null)
                                {
                                    block.Data.Items.Add(item);
                                }
                                reader.Read();
                            }
                        }
                        break;
                }
            }
            return block;
        }

        private CheckListItem ReadCheckListItem(ref Utf8JsonReader reader)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                return null;
            }

            var item = new CheckListItem();

            while (reader.Read())
            {
                if (reader.TokenType == JsonTokenType.EndObject)
                {
                    return item;
                }
                string? propertyName = reader.GetString() ?? "";
                switch (propertyName.ToLower())
                {
                    case "text":
                        reader.Read();
                        item.Text = reader.GetString() ?? "";
                        break;
                    case "checked":
                        reader.Read();
                        item.Checked = reader.GetBoolean();
                        break;
                }
            }

            return item;
        }
    }

    public class CheckListBlockData
    {
        public List<CheckListItem> Items { get; set; } = new List<CheckListItem>();
    }

    public class CheckListItem
    {
        public string Text { get; set; }
        public bool Checked { get; set; }

    }
}
