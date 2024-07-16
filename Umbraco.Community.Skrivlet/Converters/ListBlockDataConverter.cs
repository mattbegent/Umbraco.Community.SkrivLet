using System.Text.Json;
using System.Text.RegularExpressions;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class ListBlockDataConverter : IBlockDataConverter
    {
        private const string UmbLinkPattern = "(<a\\s+(?:[^>]*?\\s+)?href=\")(umb:\\/\\/[^\"]*)\"";
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;
        private readonly IPublishedUrlProvider _publishedUrlProvider;

        public ListBlockDataConverter(
            IUmbracoContextAccessor umbracoContextAccessor,
            IPublishedUrlProvider publishedUrlProvider)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
            _publishedUrlProvider = publishedUrlProvider;
        }

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
                                block.Data.Items.Add(ConvertUrls(reader.GetString() ?? ""));
                                reader.Read();
                            }
                        }


                        break;
                }
            }
            return block;
        }
        private string ConvertUrls(string text)
        {
            return Regex.Replace(text, UmbLinkPattern, ConvertUdiUrl);
        }

        private string ConvertUdiUrl(Match match)
        {
            var udiText = match.Groups[2].Value;

            var udi = UdiParser.Parse(udiText);

            if (!_umbracoContextAccessor.TryGetUmbracoContext(out var context)
                || context.Content == null)
            {
                return string.Empty;
            }
            var content = context.Content.GetById(udi);
            if (content == null)
            {
                return string.Empty;
            }
            return $"{match.Groups[1].Value}{content.Url(_publishedUrlProvider)}\"";
        }
    }

    public class ListBlockData
    {
        public string Style { get; set; }
        public List<string> Items { get; set; } = new List<string>();
    }
}
