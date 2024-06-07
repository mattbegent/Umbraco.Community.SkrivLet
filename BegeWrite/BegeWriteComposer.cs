using BegeWrite.Converters;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace BegeWrite
{
    public class BegeWriteComposer : IComposer
	{
		public void Compose(IUmbracoBuilder builder)
		{
			builder.Services.AddTransient<BegeWriteBlockJsonConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ParagraphBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, HeaderBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, CodeBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ImageBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, ListBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, QuoteBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, RawHtmlBlockDataConverter>();
			builder.Services.AddTransient<IBlockDataConverter, CheckListBlockDataConverter>();
		}
	}
}
