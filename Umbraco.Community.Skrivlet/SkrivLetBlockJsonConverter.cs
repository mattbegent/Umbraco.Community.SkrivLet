using System.Text.Json;
using System.Text.Json.Serialization;
using Umbraco.Community.SkrivLet.Converters;

namespace Umbraco.Community.SkrivLet
{
    public class SkrivLetBlockJsonConverter : JsonConverter<SkrivLetBlockBase>
	{
		private readonly IEnumerable<IBlockDataConverter> _converters;

		public SkrivLetBlockJsonConverter(IEnumerable<IBlockDataConverter> converters)
		{
			_converters = converters;
		}

		public override SkrivLetBlockBase? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			if (reader.TokenType != JsonTokenType.StartObject)
			{
				throw new JsonException();
			}

			SkrivLetBlockBase baseObj = new SkrivLetBlockBase();
			while (reader.Read())
			{
				if (reader.TokenType == JsonTokenType.EndObject)
				{
					return baseObj;
				}

				// Get the key.
				if (reader.TokenType != JsonTokenType.PropertyName)
				{
					throw new JsonException();
				}

				string? propertyName = reader.GetString();
				switch (propertyName.ToLower())
				{
					case "id":
						reader.Read();
						baseObj.Id = reader.GetString();
						break;
					case "type":
						reader.Read();
						baseObj.Type = reader.GetString();
						break;
					case "data":
						reader.Read();
						var validConverters = _converters.Where(x => x.CanConvert(baseObj.Type));
						if (validConverters.Any())
						{
							baseObj = validConverters.First().Convert(ref reader, baseObj.Id, baseObj.Type);
						}
						else
						{
							return baseObj;
						}
						break;
				}
			}

			return baseObj;
		}

		public override void Write(Utf8JsonWriter writer, SkrivLetBlockBase value, JsonSerializerOptions options)
		{
			throw new NotImplementedException();
		}
	}
}
