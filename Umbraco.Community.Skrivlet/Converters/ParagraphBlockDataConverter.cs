using System.Text.Json;
using System.Text.RegularExpressions;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace Umbraco.Community.SkrivLet.Converters
{
    public class ParagraphBlockDataConverter : IBlockDataConverter
    {
        private const string UmbLinkPattern = "(<a\\s+(?:[^>]*?\\s+)?href=\")(umb:\\/\\/[^\"]*)\"";
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;
        private readonly IPublishedUrlProvider _publishedUrlProvider;
        
        public ParagraphBlockDataConverter(
            IUmbracoContextAccessor umbracoContextAccessor,
            IPublishedUrlProvider publishedUrlProvider)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
            _publishedUrlProvider = publishedUrlProvider;
        }

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

                string propertyName = reader.GetString() ?? "";
                switch (propertyName.ToLower())
                {
                    case "text":
                        reader.Read();
                        block.Data = new ParagraphBlockData { Text = ConvertUrls(reader.GetString() ?? "") };
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

    public class ParagraphBlockData
    {
        public string Text { get; set; } = string.Empty;

        public override string ToString()
        {
            return Text;
        }
    }
}
