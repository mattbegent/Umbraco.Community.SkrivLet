using System.Text.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace Umbraco.Community.SkrivLet
{
	public class SkrivLetValueConverter : PropertyValueConverterBase
	{
		private readonly SkrivLetBlockJsonConverter _converter;

		public SkrivLetValueConverter(SkrivLetBlockJsonConverter converter)
		{
			_converter = converter;
		}
		
		public override bool IsConverter(IPublishedPropertyType propertyType)
		{
			return propertyType.EditorAlias.Equals(Constants.EditorName);
		}

		public override Type GetPropertyValueType(IPublishedPropertyType propertyType)
		{
			return typeof(SkrivLetModel);
		}

		public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
		{
			return PropertyCacheLevel.Element;
		}

		public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType, object? source,
			bool preview)
		{
			if (source == null) return null;

			var attemptConvertString = source.TryConvertTo<string>();
			if (attemptConvertString.Success)
				return attemptConvertString.Result;

			return null;
		}

		public override object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType,
			PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
		{
			if (inter == null)
			{
				return null;
			}

			var options = new JsonSerializerOptions
			{
				Converters = { _converter }
			};

			return JsonSerializer.Deserialize<SkrivLetModel>(Convert.ToString(inter), options);
		}	

		public override object? ConvertIntermediateToXPath(IPublishedElement owner, IPublishedPropertyType propertyType,
			PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
		{
			if (inter == null) return null;
			return inter.ToString();
		}
	}

	

	

	
}
