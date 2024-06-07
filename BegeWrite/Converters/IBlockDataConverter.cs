using System.Text.Json;

namespace BegeWrite.Converters
{
    public interface IBlockDataConverter
    {
        bool CanConvert(string type);
        BegeWriteBlockBase Convert(ref Utf8JsonReader reader, string id, string type);
    }
}
