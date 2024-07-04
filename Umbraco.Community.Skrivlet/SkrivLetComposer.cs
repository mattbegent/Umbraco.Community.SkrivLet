using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Community.SkrivLet.Converters;

namespace Umbraco.Community.SkrivLet
{
    public class SkrivLetComposer : IComposer
	{
		public void Compose(IUmbracoBuilder builder)
		{
			builder.Services.AddTransient<SkrivLetBlockJsonConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ParagraphBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, HeaderBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, CodeBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ImageBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ListBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, QuoteBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, RawHtmlBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, CheckListBlockDataConverter>();
            builder.Services.AddTransient<IBlockDataConverter, EmbedBlockDataConverter>();
		}
	}
}
